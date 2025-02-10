let boxces = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset_btn");
let wintxt = document.querySelector(".wintxt")

let turnO = true;

winPattren = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
]

boxces.forEach((box)=>{
  box.addEventListener('click',()=>{
    if(turnO===true){
      box.innerText = 'O';
      turnO = false;
    }
    else{
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
  
})

let checkWinner = () => {
  for(let pattrens of winPattren){
    let pos1Val = boxces[pattrens[0]].innerText;
    let pos2Val = boxces[pattrens[1]].innerText;
    let pos3Val = boxces[pattrens[2]].innerText;

    if(pos1Val !="" && pos2Val!="&&" && pos3Val!=""){
      if(pos1Val===pos2Val && pos2Val===pos3Val){
        showWinner(pos1Val);

      }
    }
  }
}

let showWinner = (winer) =>{
  wintxt.innerText=`congratulation winner is ${winer}`;
  wintxt.classList.remove('hide');
  box_disabled();

}

let box_disabled = () =>{
  for(let box of boxces){
    box.disabled = true;
  }
}

let box_enabled = () =>{
  for(let box of boxces){
    box.disabled = false;
    box.innerText = "";
  }
}

let resetGame = () => {
  turnO = true;
  box_enabled();
  wintxt.innerText = "";
}

resetBtn.addEventListener('click',resetGame)