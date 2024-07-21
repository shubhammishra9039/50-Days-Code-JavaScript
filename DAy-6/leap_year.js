// 6. Write a JavaScript program to determine whether a given year
//  is a leap year in the Gregorian calendar.  

var year = Number(prompt("Enter A Year!!"));

if ((year % 100 == 0 || year % 100 == 0) && year % 400 == 0) {
  document.write(`This Is Leap Year !! =${year}`);
} else {
  document.write(`This Is Not Leap Year !! =${year}`);
}
