var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if(result){
	document.write("회원 탈퇴 처리되었습니다.");
}else{
	document.write("회원 탈퇴 취소!!");
}