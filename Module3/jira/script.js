let addbtn = document.querySelector(".addItem");
let modal = document.querySelector(".modal-cont");
let addmodal = true;

addbtn.addEventListener("click",function(){
    if(addmodal){
        modal.style.display = "flex";
    }else{
        modal.style.display ="none";
    }
    addmodal=!addmodal;
})