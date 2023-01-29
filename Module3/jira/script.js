let addbtn = document.querySelector(".addItem");
let modalcont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea");
let maincont = document.querySelector(".main-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let removebtn = document.querySelector(".delete")
let toolboxcolors = document.querySelectorAll(".color")
let addmodal = true;
let removeflag = false;
let colors = ['pink','blue','green','black'];
let modalPriorityColor = colors[colors.length-1];
var uid = new ShortUniqueId();

let ticketArr =[];


for(let i=0;i<toolboxcolors.length;i++){
    toolboxcolors[i].addEventListener("click",function(){
        let currentColor = toolboxcolors[i].classList[1];
        let filteredArr = [];
        for(let i=0;i<ticketArr.length;i++){
            if(ticketArr[i].color==currentColor){
                filteredArr.push(ticketArr[i])
            }
        }
       let allTickets = document.querySelectorAll(".ticket-cont");
       for(let j=0;j<allTickets.length;j++){
        allTickets[j].remove();
       }
       for(let i=0;i<filteredArr.length;i++){
        let ticket = filteredArr[i];
        let color = ticket.color;
        let task = ticket.task;
        let id = ticket.id;
        createticket(color,task,id)
       }
    })
    toolboxcolors[i].addEventListener("dblclick",function(){
        let allTickets = document.querySelectorAll(".ticket-cont");
       for(let j=0;j<allTickets.length;j++){
        allTickets[j].remove();
       }
       for(let i=0;i<ticketArr.length;i++){
        let ticket = ticketArr[i];
        let color = ticket.color;
        let task = ticket.task;
        let id = ticket.id;
        createticket(color,task,id)
       }
    })
}




addbtn.addEventListener("click",function(){
    if(addmodal){
        modalcont.style.display = "flex";
    }else{
        modalcont.style.display ="none";
    }
    addmodal=!addmodal;
})

for(let i=0;i<allPriorityColors.length;i++){
    let priorityDivOneColor = allPriorityColors[i];
    priorityDivOneColor.addEventListener("click",function(){
        for(let j=0;j<allPriorityColors.length;j++){
            allPriorityColors[j].classList.remove("Active");
        }
        priorityDivOneColor.classList.add("Active");
        modalPriorityColor = priorityDivOneColor.classList[0];
    })
}

removebtn.addEventListener("click",function(){
    if(removeflag){
        removebtn.style.color ='black'
    }else{
        removebtn.style.color ='red'
    }
    removeflag = !removeflag;
})

modalcont.addEventListener("keydown",function(e){
    let key =e.key;
    if(key=='Enter'){
        createticket(modalPriorityColor,taskAreaCont.value)
        taskAreaCont.value="";
        modalcont.style.display ="none";
        addmodal = !addmodal;
    }
})

// create new tickets 

function createticket(ticketColor,task,ticketid){
    let id;
    if(ticketid ==undefined){
        id =uid();
    }else{
        id = ticketid;
    }
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML=` <div class="ticket-cont">
                            <div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id">#${id}</div>
                            <div class="task-area">${task}</div>
                            <div class = "Lock-unlock"> <i class="fa fa-lock"></i></div>
                            </div>`
    maincont.appendChild(ticketCont);

    // lock unlock handle 

    let lockunlockbtn = ticketCont.querySelector(".Lock-unlock i");
    let ticketTaskArea =ticketCont.querySelector(".task-area");
    lockunlockbtn.addEventListener("click",function(){
        if(lockunlockbtn.classList.contains("fa-lock")){
            lockunlockbtn.classList.remove("fa-lock");
            lockunlockbtn.classList.add("fa-unlock")
            ticketTaskArea.setAttribute("contenteditable","true");
        }else{
            lockunlockbtn.classList.remove("fa-unlock")
            lockunlockbtn.classList.add("fa-lock")
            ticketTaskArea.setAttribute("contenteditable","false");
        }
    })

    // handling delete 
    ticketCont.addEventListener("click",function(){
        if (removeflag)
        ticketCont.remove();
    })

    // handle color 

    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click",function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx= -1;
        for(let i=0;i<colors.length;i++){
          if(currentTicketColor==colors[i]){
            currentTicketColorIdx = i;
            break;
          }
        }
        let nextColorIdx = (currentTicketColorIdx+1)%colors.length;
        let nextColor = colors[nextColorIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor); 
    })
    if(ticketid == undefined){
        ticketArr.push({"color":ticketColor,"task":task,"id":"#"+id})
        console.log(ticketArr);
    }
}
