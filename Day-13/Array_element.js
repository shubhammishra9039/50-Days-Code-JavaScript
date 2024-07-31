// 3. Write a JavaScript function to get the first element of an array.
//  Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function Array(array, num) {
  var num1 = num;
  if (num == null) {
    num1 = 1;
  }
  var colne = array.slice(0, num1);
  return colne;
}

console.log(Array([7, 9, 0, -2]));
console.log(Array([],3));
console.log(Array([7, 9, 0, -2],3));
console.log(Array([7, 9, 0, -2],6));
console.log(Array([7, 9, 0, -2],-3));
