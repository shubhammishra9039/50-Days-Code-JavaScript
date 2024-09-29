let number =28;

let sum=0;
for(let i=1;i<=Math.floor(number/2);i++)
{
    if(number%i==0)
    {
        sum +=i
    }
}

if(sum==number) console.log("perfect Number");
else console.log("Not A Perfect Number");


