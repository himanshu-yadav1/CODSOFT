var outarea = document.getElementById("output-area");


function abc(args){
    outarea.innerText = outarea.innerText+=args;
}

function blank(){
    outarea.innerText = " ";
}

function calculate() {
    var p = outarea.innerText;
    var q = eval(p);
    outarea.innerText = q; 
}


// var btnAC = document.getElementById("AC");
// var btn0 = document.getElementById("zero");
// var btn1 = document.getElementById("one");
// var btn2 = document.getElementById("two");
// var btn3 = document.getElementById("three");
// var btn4 = document.getElementById("four");
// var btn5 = document.getElementById("five");
// var btn6 = document.getElementById("six");
// var btn7 = document.getElementById("seven");
// var btn8 = document.getElementById("eight");
// var btn9 = document.getElementById("nine");
// var btnAdd = document.getElementById("add");
// var btnSub = document.getElementById("subtract");
// var btnDiv = document.getElementById("divide");
// var btnMul = document.getElementById("multiply");
// var btndot = document.getElementById("dot");
// var btnEquals = document.getElementById("equalsto");

// btnAC.addEventListener("onclick", blank());
// btn0.addEventListener("onclick", abc('0'));
// btn1.addEventListener("click", abc('1'));
// btn2.addEventListener("click", abc('2'));
// btn3.addEventListener("click", abc('3'));
// btn4.addEventListener("click", abc('4'));
// btn5.addEventListener("click", abc('5'));
// btn6.addEventListener("click", abc('6'));
// btn7.addEventListener("click", abc('7'));
// btn8.addEventListener("click", abc('8'));
// btn9.addEventListener("click", abc('9'));
// btnAdd.addEventListener("click", abc('+'));
// btnSub.addEventListener("click", abc('-'));
// btnDiv.addEventListener("click", abc('/'));
// btnMul.addEventListener("click", abc('*'));
// btndot.addEventListener("click", abc('.'));
// btnEquals.addEventListener("click", calculate());

   