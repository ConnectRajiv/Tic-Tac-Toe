let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

////variable///
let turnO = true;

/////winning patters////
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//////reset game////
const resetgame = () => {
  let turnO = true;
  enableboxes();
  msgContainer.classList.add("hide");
};

///logics for X and O//////

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
////////////disable buttons after winning match////
const disableboxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

//////////enable boxes after restart///////////
const enableboxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

/////displaying winner//////
const showWinner = (winner) => {
  msg.innerText = `Congratulation!! Winner is  ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};

///////////////postion matching//////////
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    } 
  }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
