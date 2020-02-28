var firstQuaterSalesAmount = 1200;
var secondQuaterSalesAmount = 1300;
var thirdQuaterSalesAmount = 1000;
var priorQuatersAvg = (firstQuaterSalesAmount+secondQuaterSalesAmount+thirdQuaterSalesAmount)/3;
var lastQuaterSalesAmount = window.prompt("4분기 판매량?", 0);

var result = lastQuaterSalesAmount >= priorQuatersAvg ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";
document.write(result, "<br>");