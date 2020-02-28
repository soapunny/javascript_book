//도전 미션1
var i = 1;
while(i<=9){
	document.write("5 * ", i, " = ", 5*i, "<br>");
	i++;
}

//도전 미션2
//5행 5열 테이블을 1~25를 출력
document.write("<br>");
var result = "<table border='1px'>";
var idx = 0;
for(var i=1;i<=5;i++){
	result += "<tr>";
	for(var j=1;j<=5;j++){
		result += "<td align=center>";
		result += ++idx;
		result += "</td>";
	}
	result += "</tr>";
}
result += "</table>";
console.log(result);
document.write(result, "<br>");