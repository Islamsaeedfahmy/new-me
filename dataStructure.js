var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];

function sumOfTwoArrays(arr1, arr2) {
  var count = 0;

  for (i = 0; i < arr1.length; i++) {
    var found = 0;
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = 1;
      }
    }
    if (found === 0) {
      count += arr1[i];
    }
  }

  for (i = 0; i < arr2.length; i++) {
    var found = 0;
    for (j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = 1;
      }
    }
    if (found === 0) {
      count += arr2[i];
    }
  }
  return count;
}

var result = sumOfTwoArrays(arr1, arr2);
console.log("total = ", result);
