let screen=document.querySelector("h3");
screen.innerHTML=""
const buttons=document.querySelectorAll(".btn");
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener("click",function(event){
        buttonText=event.target.value;
        document.querySelector("h3").innerHTML+=buttonText;
    })
})
document.getElementById("result").addEventListener("click",function(){
    document.querySelector("h1").innerHTML=eval(document.querySelector("h3").innerHTML);
})
document.querySelector(".del").addEventListener("click",function(){
    document.querySelector("h3").innerHTML=document.querySelector("h3").innerHTML.slice(0,-1)
})
document.querySelector(".clear").addEventListener("click",function(){
    document.querySelector("h3").innerHTML="";
    document.querySelector("h1").innerHTML=0
})
document.querySelector(".ans").addEventListener("click",function(){
    document.querySelector("h3").innerHTML=document.querySelector("h1").innerHTML;
    document.querySelector("h1").innerHTML=0;
})