// 10. Write a JavaScript program to calculate
//  multiplication and division of two numbers (input from the user).
// 1st Number :
// second Number:
// multiple>,divide>


function multiple() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    document.write(`Result is  ${a * b} `);
    console.log(a);
    console.log(b);
  }

  function divied() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    document.write(`Result is  ${a / b} `);
    console.log(a);
    console.log(b);
  }