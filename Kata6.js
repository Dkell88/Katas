const whereCanIPark = function (spots, vehicle) {
  let searchChar = "";
  //Simplify the search function 
  switch(vehicle){
    case 'regular':
      searchChar = "R";
      break;
    case 'small':
      searchChar = "R S";
      break;
    case 'motorcycle':
      searchChar = "R S M"
      break;  
  }
  //Nested loops to search through the doulbe array
  for(let y = 0; y < spots.length; y++){
    for(let x = 0; x < spots[y].length; x ++){
      //search for the first availbale spot using the search character(s) if the array value is included in the search charaters return that value
      if(searchChar.includes(spots[y][x])){
        return [x, y];
      }
    }
  }
  return false
};
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));
console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))