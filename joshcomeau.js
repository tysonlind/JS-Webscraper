import { blogScraper } from "./blog-scraper.js";

const gobbledygook = "https://www.joshwcomeau.com/";

const stuffToGrab = ['img', 'p', 'h2'];

const title = 'h3';

const joshComeau = async () =>  {



    blogScraper(gobbledygook, stuffToGrab, title);

}

export { joshComeau };