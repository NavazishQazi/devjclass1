const request = require("request")
const jsdom = require("jsdom")
const { JSDOM } = jsdom;


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let MostWicket = 0;
        let nameofHighestWicketTaker = "";
        let bowlerTable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto tbody tr");
        for (let i =0;i<bowlerTable.length;i++){
            let row = bowlerTable[i].querySelectorAll("tbody tr");
            for(let j =0;j<row.length;j++){
                let tds = row[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    // console.log("Name of bowler ---> ",name,"    wicket --->",wicket);
                    if(wicket>MostWicket){
                        MostWicket = wicket;
                        nameofHighestWicketTaker =name;
                    }

                }
            }
        }
        console.log("Name of Highest Wicket Taker : ",nameofHighestWicketTaker);
        console.log("No. of wicket : ",MostWicket);
    }

}