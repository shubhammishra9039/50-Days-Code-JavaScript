let arr = [10, 20, 30, 40, 50];

let result = arr.filter((ele, index ,arr) => {
  // return index<2; //[ 10, 20 ]

  // return index+1; // [ 10, 20, 30, 40, 50 ] No change
  // console.log(arr.length); // return last statement  any function
  // return "shubham" // truthy value is [ 10, 20, 30, 40, 50 ]
  // return NaN; //[] falsely Value.
  // return arr+1; // No Changes[ 10, 20, 30, 40, 50 ]
  // return arr>10; // [] Empty becouse condition only given th element
});

console.log(result);
