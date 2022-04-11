const squareCode = function(message) {
    let string = "";
    let stringArray = [];
    let columns = 0;
    let rows = 0;
    let remainder = 0;
    let stringOut = "";
    
    for(let i = 0; i < message.length; i++){
        if(message[i] === " "){
            i++;
            string += message[i];
        }else string += message[i];
    }

    columns = Math.ceil(Math.sqrt(string.length));
    rows = Math.ceil(string.length/columns);
    remainder = columns*rows - string.length;

    /*console.log("Columns: " + columns);
    console.log("rows: " + rows);
    console.log("rem: " + remainder);
    console.log(string);*/


    for(let i = 0; i < rows; i++){
        stringArray.push([]);
        for(let j = 0; j < columns; j++){
            if(i+1 === rows && j === columns-remainder){
                break 
            }else stringArray[i].push(string[i*columns+j]);   
        }
    }

    for(let x = 0; x < columns; x ++){
        for(let y = 0; y< rows; y++){
            if(stringArray[y][x] !== undefined){
                stringOut += stringArray[y][x];
            }       
        }
        stringOut += " ";
    }
    //console.log(stringArray);
    return stringOut
  };
  
  console.log(squareCode("chill out"));
  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));