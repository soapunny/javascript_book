var arr = [1, "참", true];

document.write("<h1>배열 arr의 값은?</h1>");

document.write("<h3>배열의 값 가져오기 1</h3>");
for(var i=0; i<arr.length; i++){//일반 for문
	document.write("arr[", i, "] : ", arr[i], "<br>");
}

document.write("<h3>배열의 값 가져오기 2</h3>");
for(i in arr){//향상된 for문
	document.write("arr[", i, "] : ", arr[i], "<br>");
}