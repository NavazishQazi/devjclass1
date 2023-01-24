const puppeteer = require("puppeteer");
const mail = "rivese9513@fom8.com";
const pass = "123456";
const code = require("./code");

let browserPromise = puppeteer.launch({headless:false,defaultViewport: null, args: ['--start-maximized'] });
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
}) .then(function(){ 
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
    console.log("login successful");
}).then(function(){
    return waitandclick("[data-automation='algorithms']");
// .then(function(){
//     let waitpromise = page.waitForSelector("[data-automation='algorithms']");
//     return waitpromise;
// }).then(function(){  
//     let algorithmsclickPromise = page.click("[data-automation='algorithms']");
//     return algorithmsclickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector(".filter-group");
    return waitPromise;
}).then(function(){
    let DomclickPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return DomclickPromise;
}).then(function(){
    console.log("warmup selected");
    return waitpromise = page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
   
}).then(function(){
    let arrPromise = page.evaluate(function(){
        let arr =[];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i=0;i<aTags.length;i++){
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPromise;
}).then(function(questionsArr){
    console.log(questionsArr);
    let questionPromise = questionSolver(questionsArr[0],code.answers[0]);

})


function waitandclick(selector){
    return new Promise(function(resolve, reject) {
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        });
    })
} 


function questionSolver(question,answer){
    return new Promise(function(resolve, reject) {
      let linkPromise = page.goto(question);
      linkPromise.then(function(){
        return waitandclick('.checkBoxWrapper input');
      }).then(function(){
        let textpromise = waitandclick('.ui-tooltip-wrapper textarea');
        return textpromise;
      }).then(function(){
        let typepromise = page.type('.ui-tooltip-wrapper textarea',answer);
        return typepromise;
      }).then(function(){
        let holdControl = page.keyboard.down('Control');
        return holdControl;
      }).then(function(){
        let pressA = page.keyboard.press('A');
        return pressA;
      }).then(function(){
        let pressX = page.keyboard.press('X');
        return pressX;
      }).then(function(){
        let upControl = page.keyboard.up('Control');
        return upControl;
      }).then(function(){
        return waitandclick('.monaco-editor.no-user-select.vs');
      }).then(function(){
        let holdControl = page.keyboard.down('Control');
        return holdControl;
      }).then(function(){
        let pressA = page.keyboard.press('A');
        return pressA;
      }).then(function(){
        let pressV = page.keyboard.press('V');
        return pressV;
      }).then(function(){
        let boardpromise = waitandclick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
        return boardpromise;
      }).then(function(){
        console.log("Question submitted success");
      })
    })
}