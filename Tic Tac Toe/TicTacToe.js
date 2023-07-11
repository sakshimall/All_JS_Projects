let check = {"b1": false, "b2": false, "b3": false, "b4": false, "b5": false, "b6": false, "b7": false, "b8": false, "b9": false};
let count = 1;
const players = ["X","O"];
const resultLogic = [["b1","b2","b3"], ["b4","b5","b6"],["b7","b8","b9"], ["b1","b4","b7"], 
                    ["b2","b5","b8"], ["b3","b6","b9"], ["b1","b5","b9"],["b3","b5","b7"]];
const restartBtn = document.getElementById("restart");
const turnBtn = document.getElementById("turn");
const ttt = document.getElementById("tictactoe");
const result = document.getElementById("result");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

restartBtn.addEventListener("click", restart);

b1.addEventListener("click", changePlayer, {once: true});
b2.addEventListener("click", changePlayer, {once: true});
b3.addEventListener("click", changePlayer, {once: true});
b4.addEventListener("click", changePlayer, {once: true});
b5.addEventListener("click", changePlayer, {once: true});
b6.addEventListener("click", changePlayer, {once: true});
b7.addEventListener("click", changePlayer, {once: true});
b8.addEventListener("click", changePlayer, {once: true});
b9.addEventListener("click", changePlayer, {once: true});

function changePlayer() {
    let idx = String(this.id);
    if (!(check[idx])){
        if (turnBtn.innerHTML === "X"){
            this.classList.add("text-danger");
            this.innerHTML = "X";
            turnBtn.innerHTML = "O";
            turnBtn.classList.remove("text-danger");
            turnBtn.classList.add("text-warning");
        }
        else {
            turnBtn.innerHTML = "X";
            this.classList.add("text-warning");
            this.innerHTML = "O";
            turnBtn.classList.remove("text-warning");
            turnBtn.classList.add("text-danger");
        }
        check[idx] = true;
    }
    validateWinner(this);
}

function validateWinner(p){
    count++;
    if (count < 10){
        for (let currentPlayer of players){
            for (let values of resultLogic){
                let ruleCheck = [];
                for (let b of values){
                    if (document.getElementById(b).innerHTML === currentPlayer){
                        ruleCheck.push(true);
                    }
                    else {
                        ruleCheck.push(false);
                    }
                }
                if (ruleCheck.every((e)=>{
                    return e;
                })){
                    console.log("winner name");
                    ttt.hidden = true;
                    document.getElementById("winner").innerHTML = p.innerHTML;
                    result.hidden = false;
                    break;
                }
            }
        }
    } 
    else {
        console.log("draw");
        ttt.hidden = true;
        result.hidden = false;
        document.getElementById("winner").innerHTML = "X-O";
        document.getElementById("winnerOrDraw").innerHTML = "Draw!"
    }
}

function restart() {
    console.log("restart - reload");
    location.reload();
}
