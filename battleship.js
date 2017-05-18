var numberofships = 0;
var x = 10;
var y = 10;
function makeMove(id,player) {
 if(player=="player"){
  if(numberofships < 10){
	  if(document.getElementById(id).innerHTML===''){
		  document.getElementById(id).style.color="black";
		 document.getElementById(id).innerHTML="*";
		numberofships++; 
	  }
	  else{
		   document.getElementById("results").innerHTML="Already put boat!";
	  }
  }
 }
  else{
    if(y>0){
    if(document.getElementById(id).innerHTML=="X"){
      document.getElementById(id).style.color="red";
       document.getElementById("results").innerHTML="Hit!";
      y--;

    }
    else{
      document.getElementById(id).style.color="green"
      document.getElementById(id).innerHTML="O";
       document.getElementById("results").innerHTML="Missed!";

     }
    }
    else{
      alert("You Won");
      location.reload()
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
    document.getElementById(mis).innerHTML="<span style='color:red;'>X</span>";
}
function placeAimis1(mis){
    document.getElementById(mis).innerHTML="<span style='color:green;'>O</span>";
}
function generateAimis(){
  if(x>0){
   var mis1="row"+getRandomNum()+"col"+getRandomNum();
     if(document.getElementById(mis1).innerHTML === '*'){
         document.getElementById("results").innerHTML="Your boat is hit!";
        placeAimis(mis1);
         x--;
     }
      else{
         document.getElementById("results").innerHTML="The Computer missed!";
        placeAimis1(mis1);
        
      }
  }
  else{
     document.getElementById("results").innerHTML="The Computer Won!";
    location.reload();
  }
}