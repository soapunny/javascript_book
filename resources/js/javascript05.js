var a = 10 > 5;
var b = Boolean(null);
var c = Boolean("");
var d = Boolean(undefined);
var e = Boolean(0);

document.write("10 > 5 = "+a, "<br>");
document.write("Boolean(null) = "+b, "<br>");
document.write("Boolean(\"\") = "+c, "<br>");
document.write("Boolean(undefined) = "+d, "<br>");
document.write("Boolean(0) = "+e, "<br>");