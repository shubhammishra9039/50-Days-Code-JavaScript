// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


var Clone_array= function (inpute)
{
    var clone =inpute.slice();
    console.log(`Clone Array ${clone}`);
    return clone;
}

console.log(Clone_array([1, 2, 4, 0]));
console.log(Clone_array([1, 2, [4, 0]]));