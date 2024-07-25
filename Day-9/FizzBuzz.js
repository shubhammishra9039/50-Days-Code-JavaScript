// 7. Write a JavaScript program that iterates integers from 1 to 100.'
//  But for multiples of three print "Fizz" instead of the number and for
//   multiples of five print "Buzz". For numbers multiples of both three and
//    five print "FizzBuzz".

for(let i=1;i<=100;i++)
{
    if (i%3==0 && i%5==0)
    document.write(`${i}= FizzBuzz <br>`)
    else if(i%3==0)
    document.write(`${i}= Fizz <br>`)
    else if(i%5==0)
    document.write(`${i}= Buzz<br>`)
}