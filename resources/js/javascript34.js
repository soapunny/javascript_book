var menu = new Array("짜장면", "돈가스", "된장국", "김치찌개", "회덮밥");
var menuNum = Math.floor(Math.random()*menu.length);
var result = menu[menuNum];
document.write("[", menuNum, "]", result, "<br>");