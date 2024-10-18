function maxminimumLength(str) {
  let maxCount = -Infinity;
  let res = str.trim();
  let count = 0;
  for (let i = 0; i <=res.length; i++) {
    if (res[i] == " ") {
      if (maxCount <= count) {
        maxCount = count;
      }
      count = 0;
    } else {
      count++;
    }

    // console.log(str[i],i,str.length-1);
}
if (maxCount < count) {
  maxCount = count;
}
  console.log(maxCount);
}

maxminimumLength("the Skyrtyuio Is Blue");
