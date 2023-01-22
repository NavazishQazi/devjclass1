// first download puppeteer
const puppeteer = require("puppeteer");


  let browserPromise = puppeteer.launch({headless: false});
  browserPromise.then(function(browserIntance){
    console.log("Browser is opened");
  
  let pagePromise = browserIntance.newPage();
  return pagePromise;
})