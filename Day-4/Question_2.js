// ### Question 2

// Ask the following questions:

// - What are your English marks in the 10th grade?
// - What are your Science marks in 10th grade?
// - What are your Math marks in 10th grade?
// - What are your Hindi marks in 10th grade?
// - What are your SST marks in 10th grade?

// Now calculate percentage by taking all the 5 subjects numbers.

var a=Number(prompt("Enter Number English"));
var b=Number(prompt("Enter Number Science"));
var c=Number(prompt("Enter Number Math"));
var d=Number(prompt("Enter Number Maths"));
var e=Number(prompt("Enter Number Hindi"));
var f=Number(prompt("Enter Number SST"));

var par=document.write(`Percentage is ${(a+b+c+d+e+f)/6} %`)