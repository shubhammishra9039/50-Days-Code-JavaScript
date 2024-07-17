// 9. **Check if a number is prime**

var a = Number(prompt("Enter A Number "));

var condition = true;

if (a === 1) {
  condition=false;
} else {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      condition = false;
      break;
    }
  }


  if (condition) {
    document.write(`Number is Prime ${a}`);
  } else {
    document.write(`Number is Not Prime ${a}`);
  }
}
