let selectfield =document.querySelector("#selectfield");
let selecttext =document.querySelector("#selecttext");
let options =document.querySelectorAll(".option");
let list =document.querySelector("#list");
let arrowIcon =document.querySelector("#arrowIcon");


selectfield.onclick = function(){
    list.classList.toggle("hide");
    // arrowIcon.classList.add("rotate");
    arrowIcon.classList.toggle("rotate");
}

// selectfield.onmouseover = function(){
//    setTimeout(()=>{
//      list.classList.toggle("hide");
//     arrowIcon.classList.add("rotate");
//    },1000)
// }
for(option of options){
    option.onclick = function(){
        selecttext.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
        // arrowIcon.classList.remove("rotate");
    }
}