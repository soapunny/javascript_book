var site = window.prompt("네이버, 다음, 구글 중 즐겨 사용하는 포털사이트는?", "구글").trim();
var url;

switch(site){
	case "네이버":
		url = "www.naver.com";
		break;
	case "다음":
		url = "www.daum.net";
		break;
	case "구글":
		url = "www.google.com";
		break;
	default:
		alert("잘못된 포털사이트입니다.");
		document.write("<button onclick=location.reload()>새로고침</button>");
}

if(url){
	var confirmBoolean = confirm("해당 포털 사이트로 이동하겠습니까?");
	if(confirmBoolean){
		location.href = "http://"+url;
	}else{
		document.write("<button onclick=location.href='http://"+url+"'>"+site+"</button>");
	}
}