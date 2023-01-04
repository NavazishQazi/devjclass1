const request = require('request');
const link= "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard"
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

request('link',cb);

function cb(error,html) {
    if(error)
    console.error('error:', error); // Print the error if one occurred
    else{
    // console.log('body:', html); // Print the HTML for the link page.
    const dom = new JSDOM(html);
    console.log(dom.window.document);
    let teamName = document.querySelectorAll(".ds-w-full ds-bg-fill-content-prime ds-overflow-hidden")
    console.log(teamName[0].textContent);
    console.log(teamName[1].textContent);
    }
}