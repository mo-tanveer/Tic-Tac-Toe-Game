let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turn0 = true; //playerX, playerY
let moves = 0; //variable to keep track of moves

    let winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const resetGame = ()=>{
        turn0 = true;
        moves = 0 //reset moves
        enableBoxes();
        msgContainer.classList.add("hide");
    }




boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    
    if(turn0){
     //player0
     box.innerText = "0"
     box.style.color = "green";
     turn0 = false;
    }else{
        //playerX
        box.innerText = "X";
        box.style.color = "blue";
        turn0 = true;
    }
    box.disabled = true;
    moves++;

    checkWinner();

    if(moves == boxes.length){
        showDraw(); //All moves made and no winner so its draw!
    }
});
});
const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide"); //class ko remove krdiya
    disabledBoxes();
}

const showDraw = ()=>{
    msg.innerText = "It's a Draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)