const puppeteer = require('puppeteer');

const takeScreenShot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.stem-effect.com/');
    await page.screenshot({path: 'output.png'});

    await browser.close();
};

takeScreenShot();