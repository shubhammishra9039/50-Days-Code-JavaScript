var a=prompt("Enter A String");

var rev="";
for(let i=a.length-1;i>=0;i--)
{
    rev+=a.charAt(i);
}

  console.log(rev)
  console.log(a)
if(a===rev)
{
    document.write("String Is a Palindrome");
}
else
{
    document.write("String Is a Not Palindrome");
}