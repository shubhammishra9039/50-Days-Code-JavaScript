// qus 1. * * *
//        * * *
//        * * *





function pattern(row,col)
{
    
    for(let i=0 ;i<row;i++)
    {
        let str=""
        for(let j=0 ;j<col;j++)
        {
            str+=" * "
        }
        console.log(str);
    }

}

pattern(3,3)

