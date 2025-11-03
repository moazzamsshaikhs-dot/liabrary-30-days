let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#scn");


setInterval(()=>{
    let currTime = new Date();
    
    hrs .innerHTML = (currTime.getHours()< 10 ? "0":"") + currTime.getHours();
    min.innerHTML =(currTime.getMinutes()< 10 ? "0":"") + currTime.getMinutes();
    sec.innerHTML = (currTime.getSeconds()< 10 ? "0":"") + currTime.getSeconds();
},1000);
