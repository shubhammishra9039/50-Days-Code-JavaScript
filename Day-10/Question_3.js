// ### Question 3

// In which century were you born? Find out by asking for your birth year. Use the Math.floor function to remove the decimal portion of the century.

// input
// 1984
// output
// 20th century


var a=Number(prompt("Enter Your Birth Year"));
var century =(a/100)+1;
document.write(`The century is = ${Math.floor(century)}`)
