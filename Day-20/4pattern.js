function pattern(row,col)
{
    for(let i=0 ;i<col;i++)
    {
        let str =""
        for(let j=0;j<row;j++)
        {
            
            if(j%2==0)
            {
                str+="1 "
            }
            else
            {
                str +="0 "
            }
            
        }
        console.log(str);
    }
}

pattern(4,4)