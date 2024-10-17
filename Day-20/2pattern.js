
function pattern(row ,col)
{
   
    for(let i=0;i<col;i++)
    {
        let count=1
        let str=""
        for(let j=0;j<row;j++)
        {
            str +=" "+count
            count++
        }
        console.log(str);
    }
}

pattern(4,4)