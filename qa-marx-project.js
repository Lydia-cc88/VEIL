const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  page.on('pageerror', error => errors.push(`page: ${error.message}`));
  await page.goto('file:///C:/Users/%E7%8E%8B/Documents/ChatGPT/website/index.html#project/digital-03', { waitUntil: 'load' });
  const trigger = page.locator('#intro-trigger');
  if (await trigger.isVisible().catch(() => false)) {
    await trigger.click();
    await page.waitForTimeout(4200);
  }
  await page.evaluate(() => showProject('digital-03', false));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'tmp/mml-project-hero.png' });
  const thirdSlot = page.locator('#detail-gallery .project-media-slot').nth(2);
  await thirdSlot.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await page.screenshot({ path: 'tmp/mml-project-posters.png' });
  const exhibition = page.locator('.project-media-surface--mml-exhibition');
  await exhibition.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await page.screenshot({ path: 'tmp/mml-project-groups.png' });
  const websiteCta = page.locator('.project-website-link');
  await websiteCta.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await page.screenshot({ path: 'tmp/mml-project-website.png' });
  const data = await page.evaluate(() => {
    const video = document.querySelector('.project-media-surface--mml-motion video');
    const title = document.querySelector('#detail-title');
    const icon = document.querySelector('#detail-object img');
    const website = document.querySelector('.project-website-link');
    return {
      project: document.body.dataset.detailProject,
      title: title?.getAttribute('aria-label'),
      titleRect: title ? title.getBoundingClientRect().toJSON() : null,
      viewport: { width: innerWidth, height: innerHeight },
      icon: icon?.getAttribute('src'),
      slotCount: document.querySelectorAll('#detail-gallery .project-media-slot').length,
      website: website?.getAttribute('href'),
      video: video ? { readyState: video.readyState, paused: video.paused, width: video.videoWidth, height: video.videoHeight, currentSrc: video.currentSrc } : null,
      imageFailures: [...document.querySelectorAll('#detail-gallery img')].filter(img => !img.complete || !img.naturalWidth).map(img => img.getAttribute('src')),
      totalProjects: document.querySelector('#counter-total')?.textContent
    };
  });
  await page.evaluate(() => showProject('digital-02', false));
  await page.waitForTimeout(900);
  const fromPathMuse = await page.evaluate(() => ({
      name: document.querySelector('#next-name')?.textContent,
      icon: document.querySelector('#next-object img')?.getAttribute('src')
    }));
  await page.evaluate(() => showProject('digital-03', false));
  await page.waitForTimeout(900);
  const fromMarx = await page.evaluate(() => ({
      name: document.querySelector('#next-name')?.textContent,
      icon: document.querySelector('#next-object img')?.getAttribute('src')
    }));
  const handoff = { fromPathMuse, fromMarx };

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const mobileErrors = [];
  mobile.on('console', message => { if (message.type() === 'error') mobileErrors.push(`console: ${message.text()}`); });
  mobile.on('pageerror', error => mobileErrors.push(`page: ${error.message}`));
  await mobile.goto('file:///C:/Users/%E7%8E%8B/Documents/ChatGPT/website/index.html', { waitUntil: 'load' });
  await mobile.evaluate(() => {
    document.body.classList.remove('is-booting');
    document.querySelector('#enter')?.classList.add('is-hidden');
    showProject('digital-03', false);
  });
  await mobile.waitForTimeout(2400);
  await mobile.screenshot({ path: 'tmp/mml-project-mobile.png' });
  const mobileData = await mobile.evaluate(() => {
    const title = document.querySelector('#detail-title');
    const rect = title?.getBoundingClientRect();
    return {
      title: title?.getAttribute('aria-label'),
      titleRect: rect ? { x: rect.x, right: rect.right, width: rect.width } : null,
      viewport: innerWidth,
      imageFailures: [...document.querySelectorAll('#detail-gallery img')].filter(img => !img.complete || !img.naturalWidth).map(img => img.getAttribute('src'))
    };
  });
  console.log(JSON.stringify({ data, handoff, mobileData, errors, mobileErrors }, null, 2));
  await mobile.close();
  await browser.close();
})();
