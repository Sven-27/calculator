const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");

let firstNumber = "";
let secondNumber = "";

function onClickNumber(number){
  if(!myOperator.value){
    firstNumber = myInput.value += number;
  }else{
    secondNumber = myInput.value += number;
  }
}

function onClickOperator(operator){
  myOperator.value = operator;
  myInput.value = ""
  
  if(operator === "+"){
    return parseFloat(firstNumber) + parseFloat(secondNumber);
  }
  if(operator === "-"){
    return parseFloat(firstNumber) - parseFloat(secondNumber);
 }
  if(operator === "*"){  
    return parseFloat(firstNumber) * parseFloat(secondNumber);
  }
  if(operator === "/"){
    return parseFloat(firstNumber) / parseFloat(secondNumber);
  }
}

function onClickCancel(evt){
  console.log(evt);
  myInput.value = "";
  myOperator.value = "";
}

function onClickEquals(evt){
  console.log(evt);
  myInput.value = onClickOperator(myOperator.value);

}

