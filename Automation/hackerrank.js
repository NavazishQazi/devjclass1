const puppeteer = require("puppeteer");
const mail = "rivese9513@fom8.com";
const pass = "123456";

let browserPromise = puppeteer.launch({headless:false});
let page;
browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("page is opend");
    page = pageInstance
    let urlpromise = page.goto('https://www.hackerrank.com/access-account/');
}).then(function(){
    console.log("hacker rank page is opened")
}).then(function(){ 
    let waitpromise = page.waitForSelector('a.hr_button');
    return waitpromise;
}).then(function(){
    let DomclickPromise = page.evaluate(function(){
        let btns = document.querySelectorAll("a.hr_button");
        btns[1].click();
        return ;
    });
    return DomclickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let mailTypepromise = page.type("#input-1",mail,{ delay: 100});
    return mailTypepromise;
}).then(function(){
    let passTypepromise = page.type("#input-2",pass,{delay: 100});
    return passTypepromise;
}).then(function(){
    let loginpromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginpromise;
}).then(function(){
    console.log("login successful ")
})