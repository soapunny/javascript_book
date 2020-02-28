var transportFee = 3000;
var foodExpenses = 6000;
var drinkExpenses = 3000;
var totalExpenses = transportFee + foodExpenses + drinkExpenses;

var result = transportFee + foodExpenses + drinkExpenses > 10000 ? totalExpenses - 10000 +"원 초과"
	: "돈 관리 참 잘했어요!";

document.write(result, "<br>");