function pattern(row,col)
{
    for(let i=0; i<row;i++)
    {
        let count=97
        let str=""
        
     for(let j=0;j<=i;j++)
      {
        str +=" "+String.fromCharCode(count)
                
                count++

     }
     console.log(str);
        
    }
}

pattern(4,4)