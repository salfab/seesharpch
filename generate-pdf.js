const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:4000/cv/", {
    waitUntil: "networkidle0",
    timeout: 30000,
  });
  fs.mkdirSync("_site/cv", { recursive: true });
  await page.pdf({
    path: "_site/cv/fabio-salvalai-cv.pdf",
    format: "A4",
    margin: { top: "15mm", right: "18mm", bottom: "15mm", left: "18mm" },
    printBackground: false,
  });
  await browser.close();
  console.log("PDF generated: _site/cv/fabio-salvalai-cv.pdf");
})();
