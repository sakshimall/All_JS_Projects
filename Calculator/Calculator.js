const outputBox = document.getElementById("output");
outputBox.addEventListener('input', function() {
    let start = this.selectionStart;
    let end = this.selectionEnd;
    const current = this.value
    const corrected = current.replace(/([^%*-/+0-9]*)/gi, '');
    this.value = corrected; 
    if (corrected.length < current.length) --end;
    this.setSelectionRange(start, end);
});

const allClearBtn = document.getElementById("allClear");
const backSpaceBtn = document.getElementById("backSpace");
const modulusBtn = document.getElementById("modulus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const dotBtn = document.getElementById("dot");
const enterBtn = document.getElementById("enter");
const btn0 = document.getElementById("n0");
const btn1 = document.getElementById("n1");
const btn2 = document.getElementById("n2");
const btn3 = document.getElementById("n3");
const btn4 = document.getElementById("n4");
const btn5 = document.getElementById("n5");
const btn6 = document.getElementById("n6");
const btn7 = document.getElementById("n7");
const btn8 = document.getElementById("n8");
const btn9 = document.getElementById("n9");

btn0.addEventListener("click", output);
btn1.addEventListener("click", output);
btn2.addEventListener("click", output);
btn3.addEventListener("click", output);
btn4.addEventListener("click", output);
btn5.addEventListener("click", output);
btn6.addEventListener("click", output);
btn7.addEventListener("click", output);
btn8.addEventListener("click", output);
btn9.addEventListener("click", output);
plusBtn.addEventListener("click", output);
minusBtn.addEventListener("click", output);
multiplyBtn.addEventListener("click", output);
divideBtn.addEventListener("click", output);
modulusBtn.addEventListener("click", output);
dotBtn.addEventListener("click", output);
allClearBtn.addEventListener("click", allClear);
backSpaceBtn.addEventListener("click", backSpace);
enterBtn.addEventListener("click", calculate);

function output(event){
    console.log("output");
    outputBox.value = outputBox.value + event.target.innerHTML;
}

function allClear(){
    outputBox.value = "";
}

function backSpace(){
    const l = (outputBox.value).length;
    if (l > 0){
        outputBox.value = outputBox.value.slice(0, l-1);
    }
}

function calculate(){
    console.log("calculate");
    const l = (outputBox.value).length;
    if (l === 0){
        outputBox.value = "";
    } 
    else {
        const result = eval(outputBox.value);
        outputBox.value = result;
    }
}

function enterKeyPressed(event){
    console.log("key pressed");
    event.preventDefault();
    if (event.key == 'Enter') {
        calculate();
    }
}

for (const element of document.getElementsByClassName("number")){
    element.addEventListener("keypress", enterKeyPressed)
}