let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlicon = document.querySelector("#ctrlicon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}

if(song.play){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
}
