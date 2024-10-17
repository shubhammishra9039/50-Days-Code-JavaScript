function pattern(row,col)
{
    for(let i=0;i<col;i++)
    {
        let char=65
        let str=""
        for(let j=0;j<row ;j++ )
        {
            str +=" "+String.fromCharCode(char)
            char++;
        }
        console.log(str);
    }
}

pattern(4,4)