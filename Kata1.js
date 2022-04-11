const sumLargestNumbers = function(data) {
  let length = data.length;
  let outputArray = data
  outputArray.sort((a,b)=> a - b)
  return outputArray[length-1] + data[length-2]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));