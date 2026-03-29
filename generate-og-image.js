const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  const html = `<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=Syne:wght@700;800&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: #0b0c0e;
    color: #f0f0f2;
    font-family: 'IBM Plex Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 100px;
    position: relative;
    overflow: hidden;
  }
  body::before {
    content: '';
    position: absolute;
    top: -100px; left: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(126,255,212,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 28px;
    letter-spacing: -0.5px;
    margin-bottom: 48px;
    color: #8b8f9a;
  }
  .logo span { color: #7effd4; }
  h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 64px;
    letter-spacing: -2px;
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .tagline {
    font-size: 24px;
    color: #7effd4;
    font-weight: 300;
    margin-bottom: 32px;
  }
  .meta {
    font-size: 18px;
    color: #5c6070;
    font-weight: 300;
  }
  .prompt {
    position: absolute;
    bottom: 60px;
    right: 100px;
    font-size: 48px;
    color: rgba(126,255,212,0.12);
    font-weight: 400;
  }
</style>
</head>
<body>
  <div class="logo">see<span>sharp</span>.ch</div>
  <h1>Fabio Salvalai</h1>
  <div class="tagline">Senior Full Stack Software Engineer</div>
  <div class="meta">Lausanne, Switzerland &middot; .NET/C# &middot; React &middot; TypeScript &middot; DDD</div>
  <div class="prompt">&gt;_</div>
</body>
</html>`;

  await page.setContent(html, { waitUntil: "networkidle0" });
  fs.mkdirSync("_site", { recursive: true });
  await page.screenshot({ path: "_site/og-image.png", type: "png" });
  await browser.close();
  console.log("OG image generated: og-image.png");
})();
