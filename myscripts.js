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
  document.getElementById("operand4").innerHTML=operand4;
  document.getElementById("userAnswer2").innerHTML="";
}

function checkAnswer2(){
  var userProduct = document.getElementById("userAnswer2").value;
  var product= operand3*operand4;
  if(userProduct==product){
    document.getElementById("results2").innerHTML="Correct!";
  }
  else{
    document.getElementById("results2").innerHTML="Wrong!";
  }
    
}
var operand5;
var operand6;
function getNumbers3(){
  operand5=Math.floor(Math.random()*50)+1;
  operand6=Math.floor(Math.random()*50)+1;
  document.getElementById("operand5").innerHTML=operand5;
  document.getElementById("operand6").innerHTML=operand6;
  document.getElementById("userAnswer3").innerHTML="";
}

function checkAnswer3(){
  var userpee = document.getElementById("userAnswer3").value;
  var pee= operand3*operand4;
  if(userpee==pee){
    document.getElementById("results3").innerHTML="Correct!";
  }
  else{
    document.getElementById("results3").innerHTML="Wrong!";
  }
    
}
