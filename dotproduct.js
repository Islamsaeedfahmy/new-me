var vec1 = [5, 3];
var vec2 = [1, 4];
var result = 0;
function dot_product(vec1, vec2) {
  for (var i = 0; i < 2; i++) {
    result += vec1[i] * vec2[i]
    }
    return result;
  
  }
  
var answer=dot_product(vec1,vec2)
console.log(answer);
