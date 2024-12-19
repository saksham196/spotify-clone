let gameseq=[];
let userseq=[];
let btns=["yellow", "red", "purple","green"];

let started=false;
let level=0;
let h2 = document.queryselector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
    started=true;

    levelup();
}
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innertext=`level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.queryselector(`.${randcolor}`);
    gameseq.push(randColor);
    btnflash(randBtn);
}
function checkans(idx){
    let idx= level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`gameover ! YOUR SCORE WAS<b> ${level}</b> <br>press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset ();
    }

}
function btnpress(){
    let btn = this;
    btnflash(btn);
    usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);

}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}