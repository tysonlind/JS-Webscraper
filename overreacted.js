import { blogScraper } from "./blog-scraper.js";

const url = "https://www.overreacted.io/";

const overReacted = async () =>  {

    blogScraper(url, 'article', 'h3');

}

export { overReacted };