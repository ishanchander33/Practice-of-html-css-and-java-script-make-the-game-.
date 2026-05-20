let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let newgamebtn= document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;
// let arr2 = [["apple","mango"],["potato","tomatto"],["pizza","burger"]];

const winpatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];


//game ko dobara reset or stsrt karne k liya 
const resetGame = ()=>{
  turno = true;
  enabledboxes();
  msgcontainer.classList.add("hide");


}


// box me iterate krne  or click par value aya 
boxes.forEach((box) =>{
  box.addEventListener("click",() => {
    if(turno) {  //player o 
      box.innerText = "O";
      turno = false;
    }
    else{
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkwinner();
  });
});


// winner k baad koi click na ho 
const disabledboxes = ()=>{
  for (box of boxes){
    box.disabled = true;
  }
};


// winner k baad dobara boxes enable ho new game start ho 
const enabledboxes = ()=>{
  for (box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};


// wiiner ko show krne k liya 
const showwinner = (winner)=>{
  msg.innerText=`GameOver  Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
}


//winner check krne k liya 
const checkwinner = () => {
  for (let pattern of winpatterns) {
    // Teeno alag alag positions ki values nikaali (0, 1, 2)
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    // Ab isko looP KE andr hi check karo
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);

      }
    }
  }
};

newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);





// const checkwinner = () =>{
//   for( let pattern of winpatterns){
//     console.log(pattern[0],pattern[1],pattern[2]);
//     console.log(
//       boxes[pattern[0]].innerText,
//       boxes[pattern[1]].innerText,
//       boxes[pattern[2]].innerText,
//     );
    
//   };
// };