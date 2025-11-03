let userinput = document.querySelector("#date");
userinput.max = new Date().toISOString().split("T")[0];

let result = document.querySelector(".result");

let p = document.createElement("p");
p.setAttribute("class","pp");
result.appendChild(p);

function calculatedate(){
 let bitrthdate = new Date(userinput.value);
 
 let d1 = bitrthdate.getDate();
 let m1 = bitrthdate.getMonth() + 1;
 let y1 = bitrthdate.getFullYear();

 let today =new Date();

 let d2 = today.getDate();
 let m2 = today.getMonth() + 1;
 let y2 = today.getFullYear();

let d3, m3,y3;

 y3 =y2 -y1;

 if(m2 >= m1){
    m3 = m2 -m1;
 }else{
    y3--;
    m3 = 12 + m2 - m1;
 }

 if(d2 >= d1){
    d3 = d2 - d1;
 }else{
    m3--;
    d3 = getdaysinmonth(y1,y2)+ d2 - d1;
 }
 if(m3 < 0){
    m3 = 11 ;
    y3--;
 }
//  console.log(`year = ${y3} month = ${m3} days = ${d3}`);

 p.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months <span>${d3}</span> and days old`
}

function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}