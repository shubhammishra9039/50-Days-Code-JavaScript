// 10. **Classify a triangle based on its side lengths**

var s1 = Number(prompt("Enter A Side=1"));
var s2 = Number(prompt("Enter A Side=2"));
var s3 = Number(prompt("Enter A Side=3"));

if (s1 == s2 && s2 == s3) {
  document.write(
    `Triangle is Equilateral Triangle <br> side 1 ${s1}<br> side 2 ${s2}<br> side 3 ${s3}`
  );
} else if (s1 == s2 || s1 == s3 || s2 == s3) {
  document.write(
    `Triangle is Isosceles Triangle <br> side 1 ${s1}<br> side 2 ${s2}<br> side 3 ${s3}`
  );
} else {
  document.write(
    `Triangle is Scalene Triangle <br> side 1 ${s1}<br> side 2 ${s2}<br> side 3 ${s3}`
  );
}
