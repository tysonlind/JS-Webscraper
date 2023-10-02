import puppeteer from "puppeteer";



const blogScraper = async (url, elements, titleElement) =>  {
    console.log('blogscraper elements',elements,'blogscraper titleelement', titleElement)

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const allArticles = await page.evaluate((allElementsSelector, titleSelector) => {
        console.log('all elements selector', allElementsSelector, 'titleselector', titleSelector);
        const articles = document.querySelectorAll(allElementsSelector);

        return Array.from(articles).slice(0, 3).map((article) => {
            const title = article.querySelector(titleSelector).innerText;
            const url = article.querySelector('a').href;
            return { title, url };
        });
    }, elements, titleElement);
    
    console.log(allArticles);
};

export { blogScraper };