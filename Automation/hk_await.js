const puppeteer = require("puppeteer");
const mail = "rivese9513@fom8.com";
const pass = "123456";
const code = require("./code");

(async function(){
    let browser = await puppeteer.launch({headless:false,defaultViewport: null, args: ['--start-maximized'] });
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/access-account/'); 
    await page.waitForSelector('a.hr_button',page);
    await page.evaluate(function(){
        let btns = document.querySelectorAll("a.hr_button");
        btns[1].click();
        return ;
    });
    await page.waitForSelector("#input-1");
    await page.type("#input-1",mail,{ delay: 100});
    await page.type("#input-2",pass,{delay: 100});
    await page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await waitandclick("[data-automation='algorithms']",page);
    await page.waitForSelector(".filter-group");
    await page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    await page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    let questionsArr = await page.evaluate(function(){
        let arr =[];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i=0;i<aTags.length;i++){
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    for (let i =0;i<questionsArr.length;i++){
        await questionSolver(questionsArr[i],code.answers[i],page)
    }
})();

async function waitandclick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function questionSolver(question,answer,page){
    await page.goto(question);
    await waitandclick('.checkBoxWrapper input',page);
    await waitandclick('.ui-tooltip-wrapper textarea',page);
    await page.type('.ui-tooltip-wrapper textarea',answer);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('X');
    await page.keyboard.up('Control');
    await waitandclick('.monaco-editor.no-user-select.vs',page);
    await page.keyboard.press('A');
    await page.keyboard.press('X');
    await page.keyboard.up('Control');
    await waitandclick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',page);

}