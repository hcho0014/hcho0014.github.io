var operand1;
var operand2;
function getNumbers(){
  operand1=Math.floor(Math.random()*50)+1;
  operand2=Math.floor(Math.random()*50)+1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("userAnswer").innerHTML="";
}

function checkAnswer(){
  var userSum = document.getElementById("userAnswer").value;
  var sum= operand1+operand2;
  if(userSum==sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Wrong!";
  }
    
}
var operand3;
var operand4;
function getNumbers2(){
  operand3=Math.floor(Math.random()*50)+1;
  operand4=Math.floor(Math.random()*50)+1;
  document.getElementById("operand3").innerHTML=operand3;
  document.getElementById("operand3").innerHTML=operand3;
  document.getElementById("userAnswer").innerHTML="";
}

function checkAnswer2(){
  var userProduct = document.getElementById("userAnswer2").value;
  var product= operand3*operand4;
  if(userProduct==product){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Wrong!";
  }
    
}