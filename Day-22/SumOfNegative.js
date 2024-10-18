function sumDigit(num)
{
    let sum=0
    let isNegative=false
    if(num<0)
    {
        isNegative=true
        num=-1*num
    }
    do{
        let  rem=num%10
        if(isNegative && num<10)
        {
            sum=sum-rem
        }
        else
        {

            sum=sum+rem
        }
        num=Math.floor(num/10)
    }while(num!=0)
    console.log(sum);
}

sumDigit(-456)