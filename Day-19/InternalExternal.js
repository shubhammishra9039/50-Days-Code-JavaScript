let number = 101;
let externalSum = 0;
let internalSum = 0;
let index = 1;

for (let i = number; i > 0; i = Math.floor(i / 10)) {
    let tem = i % 10;
    
    if (index % 2 === 0) {
        externalSum += tem;
    } else {
        internalSum += tem;
    }
    
    index++;
}

console.log("Internal Sum: " + internalSum);
console.log("External Sum: " + externalSum);
