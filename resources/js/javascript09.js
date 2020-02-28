var name = window.prompt("What's your name?", "user");
var height = window.prompt("What's your height(cm)", 0);
var weight = window.prompt("What's your weight(kg)", 0);
var normalWeight = (height-100) * 0.9;
normalWeight -= normalWeight%1;

var result = "<h1>Hello, "+name
	+".</h1>Your weight is "+weight+"kg and your weight is "
	+ (weight>normalWeight ? (weight-normalWeight)+"kg heavier than normal weight" 
	: (weight == normalWeight ? "normal" : normalWeight-weight+"kg lighter than normal weight."));

document.write(result, "<br>");