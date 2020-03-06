var isAliens = false;
var repeatedSentence = setInterval(
	function(){
		isAliens = confirm("Are you an aliens");
		if(isAliens){
			document.write("Yes, You are truly an aliens", "<br>");
			clearInterval(repeatedSentence);
		}
	}, 
	3000);
