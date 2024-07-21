// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date=new Date();
var a=date.getDate()>9?0:'';
document.write(`${date.getDate()}/${a}${date.getMonth()}/${date.getFullYear()}`)
