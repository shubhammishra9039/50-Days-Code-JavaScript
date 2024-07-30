// 2. Check Prime Number
// Question: Write a function to check whether a given number is prime or not.

var a=Number(prompt("Enter A Number"));
if(a==2)
{
    document.write(`${a} Is A Prime Number`)

}
else
{
    var prime=true;
    for(let i=2;i<a;i++)
    {
        if(a%i==0)
        {
            a=false;
            break;
        }
    }
    if(prime)
    {
        document.write(`${a} Number is Prime`)
    }
    else
    {
        document.write(`${a} Number is Not Prime`)  
    }
}