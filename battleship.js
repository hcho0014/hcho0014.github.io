var numberofships = 0;
function makeMove(id,player) {
 if(player=="player"){
  if(numberofships < 10){
      document.getElementById(id).style.color="black";
     document.getElementById(id).innerHTML="#";
    numberofships++; 
  }
 }
  else{
    if(document.getElementById(id).innerHTML=="x"){
      document.getElementById(id).style.color="red";
      alert("You hit a boat")
    }
    else{
      document.getElementById(id).style.color="green"
      document.getElementById(id).innerHTML="O";
      alert("You failed to hit the boat")

     }
    }
    
}