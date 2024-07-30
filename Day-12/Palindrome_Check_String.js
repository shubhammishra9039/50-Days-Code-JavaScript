//  Palindrome Check
// Question: Write a function to check if a given string is a palindrome.
var str = prompt("Enter A String  ");
var rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}

if (str === rev) {
  document.write(`${str}=${rev} This is Palindrome`);
} else {
  document.write(`${str}=${rev} This is  Not Palindrome`);
}
