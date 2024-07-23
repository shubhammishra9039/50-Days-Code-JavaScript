// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers.
//  Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

var a = Number(prompt("Enter A Fist Number"));
var b = Number(prompt("Enter A Fist Number"));
var c = Number(prompt("Enter A Fist Number"));

if (a > 0 && b > 0 && c > 0) {
  document.write(`The Sing is : +`);
} else if (a < 0 && b > 0 && c > 0) {
  document.write(`The Sing is : -`);
} else if (a > 0 && b < 0 && c > 0) {
  document.write(`The Sing is : -`);
} else if (a > 0 && b > 0 && c < 0) {
  document.write(`The Sing is : -`);
} else {
  document.write(`The Sing is : -`);
}
