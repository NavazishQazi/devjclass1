let leaderboard=[];
processPlayer('Rohit','15','4','2','1');
processPlayer('Virat','100','40','12','5');
processPlayer('Rohit','150','49','12','10');
console.log(leaderboard);


function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls= Number(balls);
    fours= Number(fours);
    sixes= Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerobj = leaderboard[i];
        if(playerobj.Name ==name){
            playerobj.Runs+=runs;
            playerobj.Innings+=1;
            playerobj.Balls+=balls;
            playerobj.Fours+=fours;
            playerobj.Sixes+=sixes;
            return;
       }

    }
    let obj={
        Name:name,
        Innings:1,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes,

    }
    leaderboard.push(obj);
}