let addbtn = document.querySelector(".addItem");
let modalcont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea");
let maincont = document.querySelector(".main-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let removebtn = document.querySelector(".delete")
let addmodal = true;
let removeflag = false;
let modalPriorityColor ="black";



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

function createticket(ticketColor,task){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML=` <div class="ticket-cont">
                            <div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id">#qzi110</div>
                            <div class="task-area">${task}</div></div>`
    maincont.appendChild(ticketCont);
    ticketCont.addEventListener("click",function(){
        if (removeflag)
        ticketCont.remove();
    })
}
