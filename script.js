const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");

function onClickNumber(number){
  myInput.value += number;
  console.log(number);
}

function onClickOperator(operator){
  myOperator.value = operator;
  console.log(operator);
}

function onClickCancel(evt){
  console.log(evt);
  myInput.value = "";
  myOperator.value = "";
}

function onClickEquals(evt){
  console.log(evt);
}

