let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let today = new Date();
// console.log(today);

let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday"
    ,"Friday","Saturday"];
let monthall = ["January","Febuary","March","April","May","June"
    ,"July","August","September","October","November","December"];

date.innerHTML =(today.getDate() < 10 ? "0": "") + today.getDate();
day.innerHTML =  weekDays[today.getDay()];
month.innerHTML =  monthall[today.getMonth()];
year.innerHTML =  today.getFullYear();