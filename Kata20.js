const blocksAway = function(directions) {
    
    /*The taxi driver will always start at the same position, in the most south west position on the grid. 
    This means that the output will only need to specify an east and north position, since the taxi driver 
    can only end up in these East and North of the starting point.*/
    /*I disagree. The Kata gives a starting positon but not a staring heading. Given the example the driver
    is starting their heading North, I'll assume this for the solution. That means there is a possibility of 
    ending west and south of the starting position.*/

    let heading = "north"; //Starting heading = north? Assumed, else the function needs to be passed a heading as well
    let coordinates = [0,0]; //Let 0,0 represent the most south west possition.
    let coorObject = {};

    for(let i = 0; i < directions.length; i++){
        if(directions[i] === "right"){
            i++;
           switch(heading){
           case "north":
                coordinates[0] += directions[i];
                heading = "east";
                break;
            case "east":
                coordinates[1] -= directions[i];
                heading = "south";
                break;

             case "south":
                coordinates[0] -= directions[i];
                heading = "west";
                break;

            case "west":
                coordinates[1] += directions[i];
                heading = "north";
                break;
            default:
                console.log("1. Somehting went wrong") 
           }
        }else if(directions[i] === "left"){
            i++;
            switch(heading){
            case "north":
                 coordinates[0] -= directions[i];
                 heading = "west";
                 break;
             case "east":
                 coordinates[1] += directions[i];
                 heading = "north"
                 break;
 
              case "south":
                 coordinates[0] += directions[i];
                 heading = "east";
                 break;
 
             case "west":
                 coordinates[1] -= directions[i];
                 heading = "south";
                 break;
             default:
                 console.log("2. Somehting went wrong") 
            }
        }else console.log("3. Something went wrong")
    }
    //Negative coordinate maybe valid, however a cleaner output would be to convert to north, east, south, west. 
    //If the east coordinate is negative output west, ditto for north and south
    if(coordinates[0] >= 0 ){
        coorObject["east"] = coordinates[0];
    }else coorObject["west"] = Math.abs(coordinates[0]);
    
    if(coordinates[1] >= 0 ){
        coorObject["north"] = coordinates[1];
    }else coorObject["south"] =Math.abs(coordinates[1]);

    return coorObject;
    
  };
  
  console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
  console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
  console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
  console.log(blocksAway(["left", 3, "left", 1, "right", 3, "left", 1]));