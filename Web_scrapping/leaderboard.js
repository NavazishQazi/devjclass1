const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-schedule-fixtures-and-results";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let AllMatch = document.querySelectorAll("ds-text-compact-xxs")
        // console.log(AllMatch.length);
        for (let i =0;i<AllMatch.length;i++){
            let link = AllMatch[i].herf;
            let completeLink ="https://www.espncricinfo.com"+link;
            // console.log(completeLink);
            request(completeLink,cb2);
             
        }
    }
}
function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanRow = document.querySelectorAll(".")
        for(let i =0;i<batsmanRow<length;i++){
            let cell = batsmanRow[i].querySelectorAll("td");
            if(cell.length ==8){
                let name = cell[0].textContent;
                let runs =cell[2].textContent;
                let balls = cell[3].textContent;
                let fours = cell[5].textContent;
                let sixes = cell[6].textContent;
            }
       }

    }
}
