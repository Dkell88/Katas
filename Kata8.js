const repeatNumbers = function(data) {
  let text = "" // Convert the number to a string
  //As multiple arrays can be passed into the function we need nested loops
  //The first loop will loop through each array 
for(let y = 0; y < data.length; y++){
  //The second loop will take the first element of the array and copies a number of times based on the second element of the array
  for(let i = 0; i < data[y][1]; i++){
    text += data[y][0];
  }
  //After copying out the values of the "row" of the 2 demensional array add a comma to the text if it's not the last column of the 2 demensional array
  if(y !== data.length-1){
    text += " , ";
  }
  
}
return text
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));