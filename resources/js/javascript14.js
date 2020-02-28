var id = "esso7750";
var pwd = "1234";

var tmp_id = prompt("What's your id").trim();
var tmp_pwd = prompt("What's your password").trim();
var login = false;

if(tmp_id == id){//if they exist
	if(tmp_pwd == pwd){
		login = true;
		alert("로그인 성공!!");
	}else{
		document.write("비밀번호가 잘못되었습니다.", "<br>");
		document.write("<button onclick=location.reload()>뒤로가기</button>");
	}
}else{
	document.write("아이디가 존재하지 않습니다.", "<br>");
	document.write("<button onclick=location.reload()>뒤로가기</button>");
}

if(login){
	document.write("esso7750님 환영합니다", "<br>");
	document.write("<button onclick=location.reload()>뒤로가기</button>");
	document.write("<button onclick=location.href='javascript13.html'>회원탈퇴</button>");
}