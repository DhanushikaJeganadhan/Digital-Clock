const hour= document.getElementById("hour")
const minut=document.getElementById("Minut")
const secound=document.getElementById("Secound")
const ampm=document.getElementById("am")

function updateTime(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let am= "Am"

    if(h>12){
        h=h-12
        am="Pm";
    }

    hour.innerHTML=h
    minut.innerHTML=m
    secound.innerHTML=s
    ampm.innerHTML=am
    
}
updateTime();