var name = prompt("당신의 이름은?", "user");
var walkAmount = window.prompt("당신의 하루 걷는 양은 몇 보인가요?", "0");

if(name){
	if(walkAmount >= 10000){
		document.write(name+"님은 만 보 이상 걸으셨습니다. Good job!!", "<br>");
	}else{
		document.write(name+"님, 만 보까지 "+(10000 - walkAmount) + " 보가 부족합니다. cheer up!!", "<br>");
	}
}else{
	document.write("잘못된 이름입니다!!", "<br>");
}