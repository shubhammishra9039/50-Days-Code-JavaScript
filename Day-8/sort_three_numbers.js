// 3. Write a JavaScript conditional statement to sort three numbers.
//  Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
console.log("Hellp");

var a = parseInt(prompt("Enter A Number :"));
var b = parseInt(prompt("Enter Second Number :"));
var c = parseInt(prompt("Enter Third Number :"));

if (a > b) {
  if (a > c) {
    if (b > c) {
      document.write(`{(a, b, c)} ${a},${b},${c}`);
    } else {
      document.write(`{(a, c, b)} ${a},${c},${b}`);
    }
  } else {
    document.write(`{(c, a, b)} ${c},${a},${b}`);
  }
} else {
  if (b > c) {
    if (c > a) {
      document.write(`{(b, c, a)} ${b},${c},${a}`);
    } else {
      document.write(`{(b, a, c) ${b},${a},${c}`);
    }
  } else {
    document.write(`{(c, b, a)} ${c},${b},${a}`);
  }
}
