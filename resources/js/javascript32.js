var addNum = 0;

var function1 = function(){
	addNum++;
	console.log(addNum);
	function1();
};

var auto = setTimeout(function1, 1000);