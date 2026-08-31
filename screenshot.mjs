import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const url = process.argv[2];
const label = process.argv[3] || '';
const widthArg = Number(process.argv[4]) || 390; // mobile-first default

if (!url) {
  console.error('usage: node screenshot.mjs <url> [label] [width]');
  process.exit(1);
}

const OUT = join(process.cwd(), 'temporary screenshots');
await mkdir(OUT, { recursive: true });

const existing = await readdir(OUT);
const next =
  existing
    .map((f) => Number(/^screenshot-(\d+)/.exec(f)?.[1] ?? 0))
    .reduce((a, b) => Math.max(a, b), 0) + 1;

const name = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const path = join(OUT, name);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: widthArg, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
// settle page-load transitions so screenshots are deterministic
await new Promise((r) => setTimeout(r, 1200));

// Chrome's max texture is 16384px — a taller capture tiles and repeats the
// page. Drop the scale factor until the full page fits in one surface.
const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
let dsf = 2;
while (docHeight * dsf > 16000 && dsf > 0.5) dsf -= 0.5;
if (dsf !== 2) {
  await page.setViewport({ width: widthArg, height: 900, deviceScaleFactor: dsf });
  await new Promise((r) => setTimeout(r, 300));
  console.log(`page is ${docHeight}px tall — captured at ${dsf}x`);
}

await page.screenshot({ path, fullPage: true });
await browser.close();

console.log(path);
