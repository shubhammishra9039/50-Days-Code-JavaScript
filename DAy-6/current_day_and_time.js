// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const d = new Date();
var Day = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
document.write(` Today Is : ${Day[d.getDay()]} <br>`);
var timemap=d.getHours()>12?"PM":'AM';
document.write(`Current Time Is : ${d.getHours()} ${timemap}:${d.getMinutes()}:${d.getSeconds()}`)
