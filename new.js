arr1 = [3, 1, 7, 9];
arr2 = [2, 4, 1, 9, 3];
sum = 0;
function sumTwodisc(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        sum += arr1[i];
      }
    }
  }
  return sum
}
var result=sumTwodisc(arr1,arr2)
console.log(result)