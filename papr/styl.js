let usrscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choic");
const msg = document.querySelector("#msg");
const usr_scor= document.querySelector("#usr-scor");
const comp_scor= document.querySelector("#comp-scor");

const gencompchoice=()=>{
    const option =["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx]; 
}

const drawgame =()=>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        // console.log("You win");
        usrscore++;
        usr_scor.innerText = usrscore;
        msg.innerText = `You win  You ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        comp_scor.innerText = compscore;
        // console.log("You lose");
        msg.innerText = `You lose ${compchoice} beats your${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame =(userchoice)=>{
    // console.log("user choice =", userchoice);
    const compchoice =gencompchoice();
    // console.log("comp choice =",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissor paper
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock scissor
            userwin = compchoice === "scissor" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choic)=>{
    // console.log(choic);
    choic.addEventListener("click",() =>{
        const userchoice = choic.getAttribute("id");
        // console.log("choic was click", userchoiceid);
        playgame(userchoice);
    })
})