var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

var result = arr_1.join("-");
console.log(result);

result = arr_1.concat(arr_2);
console.log(result);

result = arr_1.slice(1, 3);
console.log(result);

arr_1.sort();
console.log(arr_1);

arr_2.reverse();
console.log(arr_2);

var greenArr = ["교대", "방배", "강남"]; //사당, 방배, 서초, 교대 순으로
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초"); //idx 2를 수정(1) -> "서초"로
console.log(greenArr);

greenArr.splice(3, 0, "사당"); //교대 방배 서초 사당
console.log(greenArr);

var tmpData1 = greenArr.shift(); //교대
var tmpData2 = greenArr.pop(); //사당

greenArr.unshift(tmpData2);
greenArr.splice(3, 0, tmpData1); //or greenArr.push(tmpData1);
console.log(greenArr);

var data1 = yellowArr.pop(); //수서
var data2 = yellowArr.shift(); //미금

yellowArr.push(data2);
console.log(yellowArr);

yellowArr.unshift(data1);
console.log(yellowArr);