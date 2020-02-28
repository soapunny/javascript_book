//남은 일 수 D-day(밀리초) = 해당 날짜 - 현재 날짜;
var dDayCalculator = {
	targetDay: new Date(prompt("약속 날짜를 입력하세요!(yyyy/mm/dd)").trim()),
	today: new Date(),
	calcDDay: function(){
		var dDay = Math.ceil((this.targetDay.getTime() - this.today.getTime())/1000/60/60/24);
		document.write("D-Day ", dDay, "일 남았습니다.<br>");
	}
}

dDayCalculator.calcDDay();