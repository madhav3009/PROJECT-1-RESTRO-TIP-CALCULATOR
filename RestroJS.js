function calculateTip(){
	var billAmount=document.getElementById("billAmount").value;
    var quality=document.getElementById("quality").value;
	var num=document.getElementById("totalPeople").value;
    
	if(billAmount ==""||quality=="")
	{
		alert("PLEASE ENTER SOMETHING");
		return;
	}
	  if(num==1){
		 document.getElementById("each").style.display="none";
	  }	
	  else{
			
		 document.getElementById("each").style.display="block";
		}
		
	  var total=(billAmount*quality)/num;
	  
	  document.getElementById("totalTip").style.display="block";
	  document.getElementById("tip").innerHTML=total;
 
 }


document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none"
document.getElementById("calculate").onclick=function(){
	calculateTip();	
}

