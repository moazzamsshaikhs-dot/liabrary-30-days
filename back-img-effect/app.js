let imgbox = document.querySelector(".img-box");
let imgwrap = document.querySelector(".img-wrap");
let originalimg = document.querySelector("#originalimg");
let linespan = document.querySelector("#line");


originalimg.style.width = imgbox.offsetWidth + "px";

let leftSpace = imgbox.offsetLeft;

imgbox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgwrap.style.width = boxWidth;
    linespan.style.left = boxWidth;
}