// 8. Write a JavaScript program where the program takes
//  a random integer between 1 and 10, and the user is then
//  prompted to input a guess number. The program displays a
//  message "Good Work" if the input matches the guess number
//   otherwise "Not matched".

var a = Number(prompt("Please 1-10 Number Integer :"));
var b = (Math.random() *10)-1;
b = Math.round(b);
if (a == b) {
  document.write(`Good Work ${b} your input is ${a}`);
} else {
  document.write(`Not matched ${b} your input is ${a}`);
}
