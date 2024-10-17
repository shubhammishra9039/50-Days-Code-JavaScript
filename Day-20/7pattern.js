function pattern(row,col)
{
    for(let i=0; i<row;i++)
    {
        let count=1
        let str=""
        
     for(let j=0;j<=i;j++)
      {
                str +=" "+count
                count++

     }
     console.log(str);
        
    }
}

pattern(4,4)