function Rock(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="Draw! the machine picked Rock too!";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="You Lost! The machine picked Paper!";
		}			
		else{
			document.getElementById("Result").innerHTML="You Win! The machine picked Scissors!";
		}
}
		
function Paper(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="You Win! The machine picked Rock";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="Draw! The machine picked Paper too!";
		}			
		else{
			document.getElementById("Result").innerHTML="You Lost! The machine picked Scissors!";
		}
}	
		
function Scissors(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="You Lost! The machine picked Rock!";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="You Win! The machine picked Paper!";
		}			
		else{
			document.getElementById("Result").innerHTML="Draw! The machine picked Scissors too!";
		}
}
function reset(){
    window.location.reload();

} 
