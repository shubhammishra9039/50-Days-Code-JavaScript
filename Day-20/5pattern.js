function pattern(row ,col)
{
    let count=1
    
    for(let i=0;i<col;i++)
    {
        let str=""
        for(let j=0;j<row;j++)
        {
          if(count<10)
          {
            str +=" 0"+count
          }
          else
          {
            str +=" "+count
          }
          count++

        }
        console.log(str);
    }
}

pattern(4,4)