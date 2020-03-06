var userEmail = prompt("당신의 이메일 주소는?").trim();
var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

var check1 = false;
var check2 = false;

if(userEmail.indexOf("@") > 0){check1 = true;}

for(idx in arrUrl){// idx에는 인덱스 갑이 차례대로 저장됨
	if(userEmail.match(arrUrl[idx])){// 0, "", null(존재하지 않음)이 아니면 실행
		check2 = true;
		break;
	}
}

if(check1 && check2){
	document.write(userEmail, "<br>사용 가능한 이메일 입니다.", "<br>");
}else{
	alert("잘못된 형식의 이메일 입니다.");
	location.reload();
}