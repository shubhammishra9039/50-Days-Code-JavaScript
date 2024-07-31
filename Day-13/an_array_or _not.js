// 1. Write a JavaScript function to check whether
//  an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

var is_isArray = function (input)
{
    if (toString.call(input)==="[object Array]")
    {
        document.write(`This is Array ${input} <br>`)
    }
    else
    {
        document.write(`This is Not  Array ${input}<br>`)
    }
}

is_isArray('Shubham');
is_isArray([10,20,30]);