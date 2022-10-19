let time=document.getElementById('clork');


function clork(){
let date= `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
 time.innerHTML=date
}

console.log(setInterval(clork,1000));