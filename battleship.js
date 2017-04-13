var numberofships = 0;
var x = 10;

function makeMove(id,player) {
 if(player=="player"){
  if(numberofships < 10){
      document.getElementById(id).style.color="black";
     document.getElementById(id).innerHTML="#";
    numberofships++; 
  }
 }
  else{
    if(document.getElementById(id).innerHTML=="X"){
      document.getElementById(id).style.color="red";
      alert("You hit a boat");
    }
    else{
      document.getElementById(id).style.color="green"
      document.getElementById(id).innerHTML="O";
      alert("You failed to hit the boat");

     }
    
          generateAimis();
    }
    
}
function getRandomNum(){
  return Math.floor((Math.random()*10)+1);
}
function placeAiShip(ship){
  document.getElementById(ship).innerHTML="X";
}
function generateAiShips(){
 var ship1="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship2="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship3="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship4="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship5="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship6="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship7="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship8="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship9="row"+getRandomNum()+"col"+getRandomNum()+"a";
 var ship10="row"+getRandomNum()+"col"+getRandomNum()+"a";
   placeAiShip(ship1);
   placeAiShip(ship2);
   placeAiShip(ship3);
   placeAiShip(ship4);
   placeAiShip(ship5);
   placeAiShip(ship6);
   placeAiShip(ship7);
   placeAiShip(ship8);
   placeAiShip(ship9);
   placeAiShip(ship10);


}
function placeAimis(mis){
   document.getElementById(mis).innerHTML="<span style='color:red;'>K</span>";
}
function generateAimis(){
   var mis1="row"+getRandomNum()+"col"+getRandomNum();
     if(document.getElementById(mis1) === ""){
         alert("The computer missed");
         x--;
        placeAimis(mis1);
     }
      else{
        alert("The computer hit your damn boat");
        placeAimis(mis1);
      }
  }
//function Aihitboat(){   