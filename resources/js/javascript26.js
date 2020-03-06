var str = "Let's play the game";

document.write(str.charAt(3), "<br>"); // '
document.write(str.indexOf("game"), "<br>"); // 15
document.write(str.indexOf("hang out"), "<br>"); // -1 존재하지 않는 문자열
document.write(str.indexOf("a", 10), "<br>"); // 16
document.write(str.lastIndexOf("e"), "<br>"); // 18
document.write(str.lastIndexOf("e", 15), "<br>"); // 13
document.write(str.match("pl"), "<br>"); // pl
document.write(str.match("goes") , "<br>"); // null
document.write(str.search("the") , "<br>"); // 11
document.write(str.substr(6, 4), "<br>"); // play
document.write(str.substring(6, 10), "<br>"); // play
document.write(str.replace("game", "piano"), "<br>"); // Let's play the piano
document.write(str.toLowerCase(), "<br>"); //전부 소문자로
document.write(str.toUpperCase(), "<br>"); //전부 대문자로
document.write("문자열의 길이 : ", str.length, "<br>"); // 19
var strArr = str.split(" ");
document.write(strArr.join("/"), "<br>"); // Let's/play/the/game
document.write(str.charCodeAt("8"), "<br>"); // 97(a의 아스키코드값)
document.write(String.fromCharCode(65), "<br>"); // A
document.write("========================================", "<br>");

var userName = prompt("당신의 영문이름은?", "user");
var upperName = userName.toUpperCase();
var lowerName = userName.toLowerCase();
document.write("당신의 이름은 : ", upperName, "(", lowerName, ") 입니다.", "<br>");

var userNumber = prompt("당신의 연락처는?(01x-xxxx-xxxx)", "010-0000-0000");
document.write("당신의 연락처는 : ", userNumber.substring(0, 9), "**** 입니다.", "<br>");
