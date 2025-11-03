let lists = document.getElementsByClassName("list");
let rightbox = document.querySelector("#right");
let leftbox = document.querySelector("#left");

for(list of lists){
    list.addEventListener("dragstart",function(e){
      let selected = e.target;
    
      rightbox.addEventListener("dragover", function(e){
        e.preventDefault();
      }) 
      rightbox.addEventListener("drop", function(e){
        rightbox.appendChild(selected);
        selected = null;
      });
      leftbox.addEventListener("dragover", function(e){
        e.preventDefault();
      }) 
      leftbox.addEventListener("drop", function(e){
        leftbox.appendChild(selected);
        selected = null;
      });
    })
}