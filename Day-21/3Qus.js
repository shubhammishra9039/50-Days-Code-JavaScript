function reversSentence(str)
{
    let newStr=str.trim()
    let arr=[]
    let word=""
    let inx=0

    for(let i=0;i<newStr.length;i++)
    {
        if(newStr[i]==" " )
        {
            
            arr[inx]=word
            inx++
            word=""
           
        }
        else
        {
            word += newStr[i]
        }
    }
    arr[inx]=word
 return arr
}

let result=reversSentence("The Sky is blue")
let revSentence=""
for(let i=result.length-1;i>=0;i--)
{
    revSentence+=result[i]+" "
}
console.log(revSentence);