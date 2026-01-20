import fs from "fs";
import path from "path";
import { chromium } from "playwright";
import { fileURLToPath } from "url";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Templates to render (must match TEMPLATE_ORDER)
const TEMPLATES = [
  "classic",
  "modern",
  "compact",
  "executive",
  "minimal",
  "two_column",
  "technical",
  "graduate",
  "academic",
  "bold",
];

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.join(__dirname, "../public/templates");

async function run() {
  console.log("📸 Generating CV template thumbnails…");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1600 },
  });

  for (const template of TEMPLATES) {
    const url = `${BASE_URL}/thumbs/${template}`;
    const output = path.join(OUTPUT_DIR, `${template}.png`);

    console.log(`→ Rendering ${template}`);

    await page.goto(url, { waitUntil: "networkidle" });

    // Grab the CV "paper"
    const cv = await page.$("#cv-paper");
    if (!cv) {
      console.error(`❌ Could not find #cv-paper for ${template}`);
      continue;
    }

    await cv.screenshot({
      path: output,
      type: "png",
    });

    console.log(`✔ Saved ${output}`);
  }

  await browser.close();
  console.log("✅ All thumbnails generated");
}

run().catch((err) => {
  console.error("❌ Thumbnail generation failed");
  console.error(err);
  process.exit(1);
});
