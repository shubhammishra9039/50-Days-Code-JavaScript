let number=153;

function counter(n)
{
    let  count=0
  while(n>0)
  {
    count++
    number = Math.floor(number / 10);
  }
  return count
}

function checkArmstrongNUmber(number)
{
    let originalnumber=number
    let power=counter(number)
    let armstrongNumber=0
    while(number>0)
    {
        let tem =number%10
        armstrongNumber +=Math.pow(tem,power)
        number = Math.floor(number / 10);
        console.log(armstrongNumber);
    }

    if(number===armstrongNumber)
    {
        console.log("Armstrong Number");
    }
    else
    {
        console.log("Not Armstrong Number"); 
    }



}

checkArmstrongNUmber(number)