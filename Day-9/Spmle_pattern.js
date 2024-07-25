
// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  


for(let i=0;i<5;i++)
{
    for(let j=0;j<=i;j++)
    {
        document.write(`* `)
    }
    document.write(`<br>`)
}