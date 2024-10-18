function lastWordLength(str)
{
    let arr=[];
    let inx=0
    let newStr=""
    for(let i=0;i<=str.length;i++)
    {
    if(str.charCodeAt(i) ==32 || str.length-1 == i)
    {
        arr[inx] =newStr
        newStr=""
        inx++

    }
    else
    {
        newStr+=str[i]
    }
    
}
console.log(arr);


}


lastWordLength("The Sky Is blue ")

