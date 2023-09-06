import { blogScraper } from "./blog-scraper.js";

const url = "https://www.joshwcomeau.com/";

const joshComeau = async () =>  {



    blogScraper(url, 'article', 'h3');

}

export { joshComeau };