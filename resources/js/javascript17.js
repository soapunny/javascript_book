//for문 예제
for(var i=1;i<=100;i++){
	if(i%5 == 0 && i%7 == 0){
		document.write("<p style='color:aqua'>", i, "</p>");
	}else if(i%5 == 0){
		document.write("<p style='color:red'>", i, "</p>");
	}else if(i%7 == 0){
		document.write("<p style='color:green'>", i, "</p>");
	}
}

//break문 예제
//1~10까지 반복문, i가 6이되면 탈출
for(var i=1;i<=10;i++){
	if(i == 6) break;
	document.write(i, "&nbsp;");
}

//continue문 예제
//1~10까지 홀수만 출력
document.write("<br><br>");
for(var i=1;i<=10;i++){
	if(i%2==0) continue;
	document.write(i, "&nbsp;");
}

//중첩for문 예제
//3행 2열짜리 table 출력
document.write("<br><br>");
document.write("<table border='1px'>");
for(var i = 0; i < 3; i++){
	document.write("<tr>");
	for(var j = 0; j < 2; j++){
		document.write("<td>", i+1, "행", j+1, "열", "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");