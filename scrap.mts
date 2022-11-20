import {PuppeteerCrawler, Dataset, log} from 'crawlee';

// PuppeteerCrawler crawls the web using a headless
// browser controlled by the Puppeteer library.
const crawler = new PuppeteerCrawler({
    requestHandler: async ({ page }) => {
        // Wait for the actor cards to render.
        await page.waitForSelector('.war_num');
        // Execute a function in the browser which targets
        // the actor card elements and allows their manipulation.
        const actorTexts = await page.$$eval('.war_num', (els) => {
            // Extract text content from the actor cards
            return els.map((el) => el.textContent);
        });
        actorTexts.forEach((text, i) => {
            log.info(`Actor #${i + 1}: ${text}`);
        });
    },
});

await crawler.run(['https://www.pravda.com.ua/eng/']);