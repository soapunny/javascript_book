document.write("<h1>가위 바위 보 게임</h1>");
//1 : 가위, 2 : 바위, 3 : 보
//if user==가위
//		case com == 가위, draw, 0
//		case com == 바위, com 승, -1
//		case com == 보,  user 승, -2
//else if user==바위
//		case com == 바위, draw, 0
//		case com == 보, com 승, -1
//		case com == 가위, user 승, 1
//else if user==보
//		case com == 보, draw, 0
//		case com == 가위, com 승, 2
//		case com == 바위, user 승, 1
//즉, 유저숫자 - 컴퓨터숫자 + 1을 한 숫자가
//1이면 무승부
//0이거나 3이면 com 승
//2이거나 -1이면 user 승
//좀 더 정리해서 (유저숫자 - 컴퓨터숫자 + 1)%3 한 숫자가
//1이면 무승부
//0이면 com 승
//나머지이면 user 승

var comNum = Math.floor(Math.random()*3)+1; //1, 2, 3 중 하나
var userInput = prompt("가위, 바위, 보 중 하나를 입력하세요", "가위").trim();

var comInput;
var userNum;

switch(userInput){
	case "가위": userNum = 1;
		break;
	case "바위": userNum = 2;
		break;
	case "보": userNum = 3;
		break;
	default: alert("잘못된 입력입니다. -> "+userInput); location.reload();
}

if(comNum == 1){
	comInput = "가위";
}else if(comNum == 2){
	comInput = "바위";
}else{
	comInput = "보";
}

document.write("<p> Com : ", comInput,"</p>");
document.write("<p> User : ", userInput,"</p>");

document.write("<p>");
var result = (userNum-comNum+1)%3;
if(!result){
	document.write("<b>You lose!!</b>");
}else if(result == 1){
	document.write("<b>Draw!!</b><br>");
}else{
	document.write("<b>You Win!!</b><br>");
}
document.write("</p>");

document.write("<button onclick='location.reload()'>Retry?</button>");