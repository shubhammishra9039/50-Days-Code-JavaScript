



function pattern(str1, str2)
{
    let count=str1.length-str2.length
    count=count>0?count:-(count)
    let result=""
    if(str1.length===str2.length)
    {
        for(let i=0;i<str1.length;i++)
        {
            result =result+str1[i]+str2[i]
        }
    }

    else if(str2.length>str1.length)
    {
        for(let i=0 ;i<str1.length;i++)
        {
            result =result+str1[i]+str2[i]
        }
        for(let j=str1.length;j<str2.length;j++)
        {
            result =result+str2[j]
        }
    }
    else if(str1.length>str2.length)
    {
        for(let i=0 ;i<str2.length;i++)
        {
            result =result+str1[i]+str2[i]
        }
        for(let j=str2.length;j<str1.length;j++)
        {
            result =result+str1[j]
        }
    }
    console.log(result);
}

pattern("abcd","efghi")