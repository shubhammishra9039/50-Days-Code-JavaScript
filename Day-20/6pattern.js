function pattern(row,col)
{
    for(let i=0;i<col;i++)
    {
        let str=""
        for(let j=0;j<=i;j++)
        {
            str +="* "
        }
console.log(str);
    }
}

pattern(4,4)