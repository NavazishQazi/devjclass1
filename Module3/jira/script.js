let addbtn = document.querySelector(".addItem");
let modalcont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea");
let maincont = document.querySelector(".main-cont");
let addmodal = true;


addbtn.addEventListener("click",function(){
    if(addmodal){
        modalcont.style.display = "flex";
    }else{
        modalcont.style.display ="none";
    }
    addmodal=!addmodal;
})

modalcont.addEventListener("keydown",function(e){
    let key =e.key;
    if(key=='Enter'){
        createticket(taskAreaCont.value)
        taskAreaCont.value="";
        modalcont.style.display ="none";
        addmodal = !addmodal;
    }
})

function createticket(task){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML=` <div class="ticket-cont">
                            <div class="ticket-color"></div>
                            <div class="ticket-id">#qzi110</div>
                            <div class="task-area">${task}</div></div>`
    maincont.appendChild(ticketCont);
}
