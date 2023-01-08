const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const js = require("fs");


const link = "https://github.com/topics"

request(link,cb);

function cb(error,responce,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const  document = dom.window.document;
        // console.log(html);
        let allAnchorTags = document.querySelectorAll(".col-12.col-sm-6.col-md-4.mb-4");
        // console.log(allAnchorTags);
        for (let i=0;i<allAnchorTags.length;i++){
            let link = allAnchorTags[i].herf;
            let completelink = "https://github.com"+link;
            console.log(completelink);
            request(completelink,cb2);
        }
    }
}

function cb2(error,responce,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document=dom.window.document;
    }
}