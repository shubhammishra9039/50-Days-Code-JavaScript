// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
//ABC = √[s × (s – a) × (s – b) × (s – c)].
//s=(a+b+C)/2

var a = Number(prompt("Enter First  Side"));
var b = Number(prompt("Enter Second  Side"));
var c = Number(prompt("Enter Third Side"));
var s = (a + b + c) / 2;
var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
document.write(`Area Is ${Math.round(area)}`);
