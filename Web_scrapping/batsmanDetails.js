const request = require("request");
const cheerio = require("cheerio")
const jsdom = require("jsdom")
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log("error ",error);
    }else{
    //     console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsman = document.querySelectorAll("ds-table-row-compact-bottom ds-border-none");
        // console.log(batsman);
        for (let i =0;i<batsman.length;i++){
            let batsmanLink = batsman[i].herf;
        //    console.log(batsmanLink);
            let completeBatsmanLink = "https://www.espncricinfo.com"+batsmanLink;
            // console.log(completeBatsmanLink);
            request(completeBatsmanLink,cb2);
        }
    }
}

function cb2(error,response,html){
    if (error){
        console.log(error);
    }else{
    const jsdom = new JSDOM(html);
    const document = dom.window.document;
    let playerDetail =document.querySelectorAll("ds-grid lg:ds-grid-cols-3 ds-grid-cols-2 ds-gap-4 ds-mb-8");
    let playerDivSpan = playerDetail.querySelectorAll("div span");
    // console.log(playerDiv);
    let fullName = playerDivSpan[0].textContent;
    let DOB = playerDivSpan[1].textContent;
    console.log("Full Name : ",fullName," Date of birth : ",DOB);
}
}