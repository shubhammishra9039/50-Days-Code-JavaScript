//check valid month number 
let monthList=["jan","feb","mar","apr","may" ,"jun", "july", "aug","sep","oct","nov","dec"]
let monthNumber=11

if(monthNumber>0 && monthNumber<13) console.log("Month Is "+ monthList[(monthNumber-1)]);
else console.log("Invalid Number");
