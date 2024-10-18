function anagram(str1,str2)
{
    for(let i= 0;i<str1.length;i++)
    {


        for(let j=0;j<str2.length ;j++)
        {
            if(str1[i]==str2[j])
            {
                return false
            }
        }
    }
    return true
}


console.log(anagram("leap","peal"));
console.log(anagram("apple","plae"));