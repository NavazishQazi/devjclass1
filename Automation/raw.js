// first download puppeteer
const puppeteer = require("puppeteer");


  let browserPromise = puppeteer.launch({headless: false});
  browserPromise.then(function(browserIntance){
    console.log("Browser is opened");
  
  let pagePromise = browserIntance.newPage();
  return pagePromise;
}).then(function(page){
    console.log("page is opend");
    let urlPromise = page.goto('https://www.google.com/')
    return urlPromise
}).then(function(){
    console.log("google is opened");
})