// Day of check Month And Print also print leap year according

if(n>0 && n<=11)
{
    if (n==1 ||n==3 || n==5 ||n==7 || n==8 || n==10 ||n==12)
    {
        console.log("DAys is 31");
    }
    else if(n=2)
    {
        console.log("Day 28 29");
    }
    else
    {
        console.log("day 30");
    }
}
else
{
    console.log("Invalid Number");
}