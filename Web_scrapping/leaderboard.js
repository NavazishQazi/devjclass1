const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs =require("fs");

const link = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-schedule-fixtures-and-results";

let leaderboard = [];
counter = 0;
request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent");
        // console.log(allScorecardTags);
        for (let i = 0; i < allScorecardTags.length; i++) {
            
            let link = allScorecardTags[i].herf;
            let completeLink = "https://www.espncricinfo.com" + link;
            // console.log(completeLink);
            request(completeLink, cb2);
            counter++;

        }
    }
}
function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanRow = document.querySelectorAll(".table.batsman tbody tr")
        for (let i = 0; i < batsmanRow < length; i++) {
            let cell = batsmanRow[i].querySelectorAll("td");
            if (cell.length == 8) {
                let name = cell[0].textContent;
                let runs = cell[2].textContent;
                let balls = cell[3].textContent;
                let fours = cell[5].textContent;
                let sixes = cell[6].textContent;
                // console.log("name: ",name,"runs: ",run,"balls: ",balls,"fours: ",fours,"sixes: ",sixes);
                processPlayer(name, runs, balls, fours, sixes);
            }

        } 
         counter--;
         if(counter==0){
            console.log(leaderboard);
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync("batsmenstatsss.json",data);
         }
     }
}   
            //  processPlayer('Rohit','15','4','2','1');
            //  processPlayer('Virat','100','40','12','5');
            // processPlayer('Rohit','150','49','12','10');
            // console.log(leaderboard);


            function processPlayer(name, runs, balls, fours, sixes) {
                runs = Number(runs);
                balls = Number(balls);
                fours = Number(fours);
                sixes = Number(sixes);
                for (let i = 0; i < leaderboard.length; i++) {
                    let playerobj = leaderboard[i];
                    if (playerobj.Name == name) {
                        playerobj.Runs += runs;
                        playerobj.Innings += 1;
                        playerobj.Balls += balls;
                        playerobj.Fours += fours;
                        playerobj.Sixes += sixes;
                        return;
                    }

                }
                let obj = {
                    Name: name,
                    Innings: 1,
                    Runs: runs,
                    Balls: balls,
                    Fours: fours,
                    Sixes: sixes,

                }
                leaderboard.push(obj);
            }
        