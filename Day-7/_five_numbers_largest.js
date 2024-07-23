// 4. Write a JavaScript  to
//  find the largest of five numbers. 
//  Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0


var arr=[-5,-3, -2,0,-4];
var max=Number.MIN_SAFE_INTEGER;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
for (let x of arr)
{
    document.write(`${x} ,`)
}

document.write(`Max Is ${max} ,`)
