const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");

let firstNumber = "";
let secondNumber = "";
const empty = "";

function startsNotWithZero(number){
  if(myInput.value === empty || number[0] === "0"){
    return myInput.value = empty;
  }else{
    return myInput.value;
  }
}
  
  function onClickNumber(number){
    const dot = ".";

    if (myInput.value.indexOf(dot) !== -1 && number === dot) {
      return;
    }
    if(!myOperator.value){
      startsNotWithZero(firstNumber = myInput.value += number);
    }
    else{
      startsNotWithZero(secondNumber = myInput.value += number);
    }
  }
  
function onClickOperator(operator){
  myOperator.value = operator;
  myInput.value = empty
  
  if(operator === "+"){
    return parseFloat(firstNumber) + parseFloat(secondNumber);
  }
  if(operator === "-"){
    return parseFloat(firstNumber) - parseFloat(secondNumber);
 }
  if(operator === "x"){  
    return parseFloat(firstNumber) * parseFloat(secondNumber);
  }
  if(operator === "/"){
    return parseFloat(firstNumber) / parseFloat(secondNumber);
  }
}

function onClickCancel(evt){
  console.log(evt);
  myInput.value = empty;
  myOperator.value = empty;
}

function onClickEquals(evt){
  console.log(evt);
  myInput.value = onClickOperator(myOperator.value);

}
