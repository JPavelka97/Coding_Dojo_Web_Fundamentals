var number1 = 0;
var number2 = 'empty';
var operator = 'empty';
var displayDiv = document.querySelector("#display");

function press(number){
    if(number1 == 0){
        number1 = number;
        displayDiv.innerText = number;
    }
    else{
        number2 = number;
        displayDiv.innerText = number;
    }

}

function setOP(op){
    operator = op;
}

function calculate(){
    number1 = number1 + (operator) + number2;
    displayDiv.innerText = number1;
}

function clr(){
    number1 = 0;
    number2 = 'empty';
    displayDiv.innerText = 0;
}

