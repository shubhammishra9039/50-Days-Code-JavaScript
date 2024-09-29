function factorial(n)
{
    let fact=1
    if(n==0)
    {
        return 1
    }
    else
    {
        for(let i=n;i>=1;i--)
        {
            fact *=i
        }
        return fact
    }
}

console.log(factorial(12));