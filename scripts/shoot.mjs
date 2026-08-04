/**
 * Full-page screenshots with real device emulation.
 *
 * Plain `--screenshot` in headless Chrome ignores the viewport meta, so mobile
 * captures come out clipped and misleading. This drives the DevTools protocol
 * directly and sets device metrics the way a phone actually reports them.
 *
 * Usage: node scripts/shoot.mjs <baseUrl> <outDir>
 */

import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE = process.argv[2] ?? 'http://localhost:4321';
const OUT = process.argv[3] ?? '.impeccable/shots';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

const ROUTES = [
  ['index', '/'],
  ['publications', '/publications'],
  ['software', '/software'],
];

const DEVICES = [
  { name: 'desktop', width: 1440, height: 900, scale: 1, mobile: false },
  { name: 'mobile', width: 390, height: 844, scale: 2, mobile: true },
];

mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--user-data-dir=/tmp/jmg-shoot-profile',
  'about:blank',
], { stdio: 'ignore' });

async function endpoint() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      return (await r.json()).webSocketDebuggerUrl;
    } catch {
      await sleep(150);
    }
  }
  throw new Error('Chrome did not expose a debugging endpoint');
}

let nextId = 1;
function rpc(ws, method, params = {}, sessionId) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    const onMessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id !== id) return;
      ws.removeEventListener('message', onMessage);
      msg.error ? reject(new Error(`${method}: ${msg.error.message}`)) : resolve(msg.result);
    };
    ws.addEventListener('message', onMessage);
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
}

try {
  const ws = new WebSocket(await endpoint());
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));

  const { targetId } = await rpc(ws, 'Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await rpc(ws, 'Target.attachToTarget', { targetId, flatten: true });

  await rpc(ws, 'Page.enable', {}, sessionId);
  await rpc(ws, 'Runtime.enable', {}, sessionId);

  for (const device of DEVICES) {
    await rpc(ws, 'Emulation.setDeviceMetricsOverride', {
      width: device.width,
      height: device.height,
      deviceScaleFactor: device.scale,
      mobile: device.mobile,
      screenWidth: device.width,
      screenHeight: device.height,
    }, sessionId);

    for (const [name, route] of ROUTES) {
      await rpc(ws, 'Page.navigate', { url: BASE + route }, sessionId);
      await sleep(900);

      // Full-page capture does not scroll, so `loading="lazy"` images below the
      // fold never enter the viewport and would photograph as empty frames.
      // Walk the page, then wait for every image to actually decode.
      await rpc(ws, 'Runtime.evaluate', {
        awaitPromise: true,
        expression: `(async () => {
          const step = window.innerHeight * 0.8;
          for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 90));
          }
          window.scrollTo(0, 0);
          await Promise.all([...document.images].map(img =>
            img.complete ? Promise.resolve() : img.decode().catch(() => {})
          ));
          await new Promise(r => setTimeout(r, 250));
        })()`,
      }, sessionId);

      // Let fonts and the tick animation settle before capturing.
      await sleep(700);

      const { data } = await rpc(ws, 'Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true,
        optimizeForSpeed: false,
      }, sessionId);

      const file = `${OUT}/${name}-${device.name}.png`;
      writeFileSync(file, Buffer.from(data, 'base64'));
      console.log(`${file}`);
    }
  }

  ws.close();
} finally {
  chrome.kill();
}
