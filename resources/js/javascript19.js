var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function(){
	document.write("tv 색상 : ", this.color, "<br>");
	document.write("tv 가격 : ", this.price, "<br>");
}

document.write("tv 객체의 info() 실행!!", "<br>");
tv.info();

var car = {
	color:"black",
	price:50000000,

	toString: function(){
		document.write("color : ", this.color, ", price : ", this.price, "원<br>");
	}
}

document.write("<br>car 객체의 toString() 실행!!<br>");
car.toString();