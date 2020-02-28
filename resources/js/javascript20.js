var baseDate = new Date("1993/09/02");
var year = baseDate.getFullYear();
var month = baseDate.getMonth();
var date = baseDate.getDate();
var day = baseDate.getDay();

switch(day){
	case 0: day = "일요일";
		break;
	case 1: day = "월요일";
		break;
	case 2: day = "화요일";
		break;
	case 3: day = "수요일";
		break;
	case 4: day = "목요일";
		break;
	case 5: day = "금요일";
		break;
	case 6: day = "토요일";
		break;
}

document.write("<h1>오늘 날짜 정보</h1>");
document.write(year, "/", month+1, "/", date, " ", day);