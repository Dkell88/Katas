const conditionalSum = function(values, condition) {
  let sum = 0;
  if(!(typeof(values.reduce((tempSum, a) => tempSum + a , 0)) === 'number')){
    return
  }
  if(condition === "even"){
    for( let i = 0; i < values.length; i++){
      if(values[i] % 2 === 0){
        sum += values[i];
      }
    }
    return sum
  }else if (condition === "odd"){
    for( let i = 0; i < values.length; i++){
      if(values[i] % 2 === 1){
        sum += values[i];
      }
    }
    return sum
  }else return
};

// Should have read the criteria first
/*const conditionalSum = function(values, condition) {
  let sortedArr = [];
  let sum = 0;
  if(!(typeof(values.reduce((tempSum, a) => tempSum + a , 0)) === 'number')){
    return
  }
  if (condition === "even"){
    sortedArr = values.filter((a) => a % 2 === 0);
    sum = sortedArr.reduce((tempSum, a) => tempSum + a , 0)
    return sum
  }else if(condition === "odd"){
    sortedArr = values.filter((a) => a % 2 === 1);
    sum = sortedArr.reduce((tempSum, a) => tempSum + a , 0)
    return sum
  }else return
};*/

console.log(conditionalSum([1, 2, 3, 4, 5, null], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99, "cat"], "even"));
console.log(conditionalSum([], "odd"));