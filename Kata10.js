const multiplicationTable = function(maxValue) {
    let array = [];
    let text = "";

    if (maxValue === 1){
        array.push(1);
        return "1 \n"  
    }
    for (let k = 0; k < maxValue; k ++){
        array.push([]);
        }

    for(let i = 0; i < maxValue; i++){
        text = "";
        for(let j = 0; j < maxValue; j++){
            array[i].push((i+1)*(j+1));
            text += array[i][j] + " ";  
        }
        console.log(text);
    }
    return " "
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));