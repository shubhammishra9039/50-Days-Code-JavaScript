// Sum of Digits
// Question: Write a function to calculate the sum of digits of a given number.

var a=Number(prompt("Enter A Number"));
var sum=0;
var c=a;
while(a>0)
{
    let team=a%10;
    sum +=team;
    a =Math.floor(a/10);

}

document.write(` ${c} The is Sum = ${sum}`);