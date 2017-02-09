var character="";

function chooseX(){
  character="X";
}

function chooseO(){
  character="O";
}

function makeMove(divLocation){
  var insideDiv= document.getElementById(divLocation).innerHTML;


  if(insideDiv === ""){
    document.getElementById(divLocation).innerHTML=character;
    document.getElementById("notes").innerHTML="";
  }
  else{
    document.getElementById("notes").innerHTML="Already made a move here "+"<p>Try another spot!</p>";
  }
  if(checkWinner()){
    document.getElementById("notes").innerHTML=character+" wins!";
  }
}

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

function checkAnswer5(){
  var userpee = document.getElementById("userAnswer3").value;
  var pee= operand5-operand6;
  if(userpee==pee){
    document.getElementById("results3").innerHTML="Correct!";
  }
  else{
    document.getElementById("results3").innerHTML="Wrong!";
  }
    
}
var operand7;
var operand8;
function getNumbers4(){
  operand7=Math.floor(Math.random()*200)+1;
  operand8=Math.floor(Math.random()*10)+1;
  document.getElementById("operand7").innerHTML=operand7;
  document.getElementById("operand8").innerHTML=operand8;
  document.getElementById("userAnswer4").innerHTML="";
}

function checkAnswer4(){
  var userp009 = document.getElementById("userAnswer4").value;
  var p009= operand7/operand8;
  if(userp009==p009){
    document.getElementById("results4").innerHTML="Correct!";
  }
  else{
    document.getElementById("results4").innerHTML="Wrong!";
  }
    
}

var pics = ["http://ewbcit.caltech.edu/Images/caltechLogo.gif",
           "http://www.gg.caltech.edu/Images/BI-i.gif",
           "http://www.einstein.caltech.edu/images/slideshow/1.jpg",
           "http://s3.foxmovies.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg",
           "http://s3.foxmovies.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg",
           "http://www.jpl.nasa.gov/infographics/uploads/infographics/full/10743.png"];
var picIndex=0;
function goLeft(){
  if(picIndex>0){
    picIndex=picIndex-1
    document.getElementById("pic").src=pics[picIndex];
    console.log(picIndex);
  }
}
function goRight(){
  if(picIndex<(pics.length-1)){
    picIndex=picIndex+1
    document.getElementById("pic").src=pics[picIndex];
    console.log(picIndex);
  }
}

