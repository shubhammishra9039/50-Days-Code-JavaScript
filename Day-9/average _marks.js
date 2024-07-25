// 6. Write a JavaScript program that computes the average 
// marks of the following students. Then, this average is 
// used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :



var arr =[["David",80],['Vinoth',77],['Divya',88],['ishitha',95],['thomas',68]];
var sum=0
for(let i=0;i<arr.length;i++)
{
    sum +=arr[i][1];
}

document.write(`Avarage is ${avg/5}`)
