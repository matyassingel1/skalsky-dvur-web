import { chromium } from "playwright";

const base = "https://matyassingel1.github.io/skalsky-dvur-web/";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
page.on("console", (m) => { if (m.type() === "error") errs.push("CONSOLE: " + m.text()); });
page.on("pageerror", (e) => errs.push("PAGEERROR: " + e.message));

console.log("--- homepage ---");
const r = await page.goto(base, { waitUntil: "networkidle", timeout: 40000 });
console.log("status:", r?.status());
await page.waitForTimeout(1200);
console.log("H1:", JSON.stringify(await page.locator("h1").first().innerText().catch(() => "?")));

console.log("--- scroll zrcadlovou sekcí ---");
for (const y of [600, 1600, 2600, 3600, 4600]) {
  await page.evaluate((v) => window.scrollTo(0, v), y);
  await page.waitForTimeout(250);
}
console.log("scroll OK");

async function clickNav(name, expect) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  try {
    await page.getByRole("link", { name, exact: true }).first().click({ timeout: 8000 });
    await page.waitForLoadState("networkidle", { timeout: 15000 });
    const h = await page.locator("h1").first().innerText().catch(() => "?");
    console.log(`klik '${name}' -> H1: ${JSON.stringify(h)} (${page.url().replace(base, "/")})`);
  } catch (e) {
    console.log(`klik '${name}' CHYBA:`, e.message);
  }
}

console.log("--- proklik menu ---");
await clickNav("Fotogalerie");
await clickNav("Kontakt");
await clickNav("Ubytování");

console.log("--- fotka načtena? ---");
const okImg = await page.evaluate(() => {
  const im = document.querySelector("img");
  return im ? im.complete && im.naturalWidth > 0 : false;
});
console.log("first image loaded:", okImg);

console.log("--- CHYBY ---");
console.log(errs.length ? errs.join("\n") : "(žádné)");
await browser.close();
