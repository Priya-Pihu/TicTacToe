let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true;  //playerX, player0;
let count=0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText = "O";
            box.style.color="#fcba03";
            turn0=false;
        }
        else{
            box.innerText= "X";
            turn0=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    })
})
const disabledBox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner)=>{
    msg.innerText="Congratulation, Winner is Player "+ winner;
    msgContainer.classList.remove("hide");
    disabledBox();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
            else if(count==9){
                msg.innerText="Ohh! Match is Draw.";
                msgContainer.classList.remove("hide");
                disabledBox();
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);