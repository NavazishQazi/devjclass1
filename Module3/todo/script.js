let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener('keydown',function(e){
    // console.log(e);
    let key = e.key;
    if(key== 'Enter'){
        let value = inputTag.value;
        if(value.length ==0){
        return
        } 
        inputTag.value ="";
        let liTag = document.createElement("li");
        liTag.innerHTML= `<div>${value}</div>
        <div class = "delete"><i class= "fa fa-trash"></i></div>`
        handleRemover(liTag);
        ulTag.appendChild(liTag);
    }
   
})

function handleRemover(liTag){
    let deletediv = liTag.querySelector(".delete");
    deletediv.addEventListener("click",function(){
        liTag.remove();
    })
}