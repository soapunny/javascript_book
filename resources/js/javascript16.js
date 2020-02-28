var i = 1;
while(i<=10){
	document.write(i++ +". 번 손님 입장", "<br>");
}

document.write("===모든 손님이 입장하였습니다.===", "<br>");


i = 1;
document.write("<br>", "2의 배수이면서 7의 배수인 수", "<br>");
while(i<=30){
	if(i%2 == 0 && i%7 == 0){
		document.write(i, "&nbsp");	
	}
	i++;
}

i = 20;
document.write("<br><br>", "20~10까지 수 출력(짝수 : 파란색, 홀수 : 빨간색)", "<br>");
while(i >= 10){
	if(i%2 == 0){
		document.write("<span style='color:blue'>", i--, "</span>&nbsp;");
	}else{
		document.write("<span style='color:red'>", i--, "</span>&nbsp;");
	}
}