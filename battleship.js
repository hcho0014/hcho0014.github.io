var numberofships = 0;
function makeMove(id,player) {
 if(player=="player"){
  if(numberofships < 10){
     document.getElementById(id).innerHTML="#";
    numberofships++; 
  }
 }
  else{
    alert("aibox");
    alert("insidebox of " + id + "contents " + document.getElementById(id).innerHTML);
    if(document.getElementById(id).innerHTML=="x"){
      document.getElementById(id).style.color="red";
    }
  }
    
}