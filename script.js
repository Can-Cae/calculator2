const screen= document.querySelector(".screen") 
const clear= document.querySelector(".btn-clear") 
const equal= document.querySelector(".btn-equal") 
const buttons= document.querySelectorAll(".btn") 

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        const number=buttons[i].getAttribute("data-num")
        screen.value+=number
    })
}
equal.addEventListener("click",function(){
    if(screen.value===""){
        alert("please enter valid number")
    }
    else{
        screen.value=eval(screen.value)
    }
})
clear.addEventListener("click",function(){
    screen.value=""
})