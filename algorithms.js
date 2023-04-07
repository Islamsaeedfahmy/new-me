var str = "I love coding.";
var modifiedStr =str.toLowerCase();
console.log(modifiedStr)
console.log(str);
console.log(str.length);
var count = 0;
var result = 1;
for (i = 0; i < modifiedStr.length; i++) {
  if (
    modifiedStr[i] == "i" ||
    modifiedStr[i] == "o" ||
    modifiedStr[i] == "e" ||
    modifiedStr[i] == "u" ||
    modifiedStr[i] == "a"
  ) {
    count++;
    
  }
  
}
console.log(count);

for(i = 0; i < modifiedStr.length; i++){
  if (modifiedStr[i] == " ")
  result++
}
console.log (result);



