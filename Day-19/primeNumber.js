let number =17 ;

if (number===2)
{
    console.log("Number Is Prime");
}
else
{
    let count= 0
    for(let i=2;i<=Math.floor(number/2);i++)
    {
        if(number%i===0)
        {
            count++;
            break;
        }
    }
    if(count===0)
    {
        console.log("Number Is Prime");
    }
    else
    {
        console.log("Number Is Not Prime");
    }
}