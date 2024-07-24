// 7. Write a JavaScript program to find out
// if 1st January will be a Sunday between 2014 and 2050.

var year = 2014;
for ( year; year <= 2050; year++) {
  var a = new Date(year, 0, 1);
  
  if (a.getDay() === 0) {
    document.write(`1 July ${year}=Sunday<br>`);
  }
}
