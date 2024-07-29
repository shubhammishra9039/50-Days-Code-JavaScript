var a=Number(prompt("Enter A first Number"));
var b=Number(prompt("Enter A seconde Number"));
var c=Number(prompt("Enter A third Number"));

if(a>b)
{
    if(a>c)
    {
        document.write(`Largest Number is ${a}`)
    }
    else
    {
        document.write(`Largest Number is ${c}`)
    }
}
else
{
    
    if(b>c)
    {
        document.write(`Largest Number is ${b}`)
    }
    else
    {
        document.write(`Largest Number is ${c}`)
    }
}