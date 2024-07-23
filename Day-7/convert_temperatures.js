// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

var a=Number(prompt('Enter A Number :'));

function cTOf(){
    var f=(a*9/5)+32;
    document.write(`Rsulte is ${f}`)
    console.log(f)
}
function fTOc(){
    var c=(a-32)*(5/9);
    document.write(`Rsulte is ${c}`)
    console.log(a)
}