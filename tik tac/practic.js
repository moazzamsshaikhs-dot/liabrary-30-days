// // let div = document.querySelector(".ci");
// // console.log(div);
// // let f = div.innerText + "shaikh";
// // console.log(f);



// let divs = document.querySelectorAll("#ci");
// console.log(divs);
// let idx = 1;
// for(div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
//     // console.log(div);
// }
// let id= div.getAttribute("id");
// console.log(id);

// let para= document.querySelector("p");
// console.log(para.setAttribute("class","myclass"));


// let span=document.querySelector("#h");
// console.log(span.style);

// let l = document.createElement("button");
// l.innerText="click";
// console.log(l);

// let diva = document.querySelector("div");
// diva.append(l);

// let divaa = document.querySelector("div");
// diva.prepend(l);


// let nw = document.createElement("h1");
// nw.innerHTML ="<u> i am a new </u>";

// let acc = document.querySelector("body").prepend(nw);

// let paraa = document.querySelector("p");
// paraa.remove();

// let nwbutton = document.createElement("button");
// nwbutton.innerText="click me";
// nwbutton.style.background="linearGradient('blue,red')";
// nwbutton.style.color="white";
// nwbutton.style.height="50px"
// nwbutton.style.width="100px";
// nwbutton.style.fontSize="20px";
// nwbutton.style.fontFamily="Arial:serif";
// nwbutton.style.padding="0px";


// let aca = document.querySelector("body").prepend(nwbutton);

// let name ="Ali";
// console.log("hello," + name + "!");


// ####################################333

// let div = document.querySelector("div");

// div.onmouseover=(e)=>{
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// let div = document.querySelector("div");

// div.addEventListener("mouseover",()=>{
//     console.log("Moazzam1")
// });

// div.addEventListener("mouseover",()=>{
//     console.log("Moazzam2")
// });

// const handl3 = ()=>{
//     console.log("Moazzam3")
// }

// div.addEventListener("click",handl3);

// div.addEventListener("mouseover",()=>{
//     console.log("Moazzam4")
// });


// div.removeEventListener("click",handl3);

// let mode = document.querySelector("#btn");
// let cuu = "light";
// let body =document.querySelector("body");

// mode.addEventListener("click",()=>{
//     if(cuu === "light"){
//         cuu ="dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//     }else{
//         cuu="light";
//         body.classList.add("white");
//         body.classList.remove("dark");
//     }

//     console.log(cuu);
// })

// game fkjngdm;s,,;sfnsnfm;fds,;fssmlfdk

let boxs = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");
let newbtn = document.querySelector("#new");
let contain = document.querySelector(".msg-contain");
let p = document.querySelector("#msg");
let main = document.querySelector(".hidss");

let turno = true;//playrx ,playro;

const winpattrn =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 6],
    [6, 7, 8]
];

const rstgame= ()=>{
    document.getElementById("won").style.display="block";
     turno = true;
     contain.classList.add("hids");
     enabledboxes();
}

// const newbtns= ()=>{
//      turno = false;
//      main.classList.add("hids");
//      enabledboxes();
// }

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was click");
        
        if(turno){
            box.innerText = "O";
            // box.style.color="red";
            // document.body.style.color="linear-gradient(45deg,red ) ";
            turno=false;
        }else{
            box.innerText = "X";
            turno =true;
        }
        box.disabled = true;

        checkedwin();
    });
});

const disabledboxes = ()=>{
    for(let box of boxs){
        box.disabled =true;
    }
}

const enabledboxes = ()=>{
    for(let box of boxs){
        box.disabled =false;
        box.innerText = "";
    }
}

const showwinner= (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    contain.classList.remove("hids");
    document.getElementById("won").style.display="none";
    disabledboxes();
}

const checkedwin =() =>{
    for(let pattrn of winpattrn){
        // console.log(pattrn[0], pattrn[1], pattrn[2]);
        // console.log(boxs[pattrn[0]].innerText,
        //             boxs[pattrn[1]].innerText,
        //             boxs[pattrn[2]].innerText);

        let posival1 = boxs[pattrn[0]].innerText;
        let posival2 = boxs[pattrn[1]].innerText;
        let posival3 = boxs[pattrn[2]].innerText;

        if(posival1 !="" && posival2 !="" && posival3 !=""){
            if(posival1 === posival2 && posival2 === posival3){
                // console.log("winner");
                showwinner(posival1);
            }
        }
    };
};

newbtn.addEventListener("click", rstgame);
rst.addEventListener("click", rstgame);