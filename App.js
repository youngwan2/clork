let time=document.getElementById('clork');
let date=document.getElementById('date');


function clork(){
let clorkDate=`${new Date().getFullYear()}년 ${new Date().getMonth()+1}월 ${new Date().getDate()}일`
let clorkTime= `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
date.innerHTML=clorkDate 
time.innerHTML=clorkTime
}

console.log(setInterval(clork,1000));