const calculateChange = function(total, cash) {
    let change = cash - total;
    let coins = {   twenties: 0, 
                tens: 0,
                fives: 0,
                loonies: 0,
                toonies: 0,
                quaters: 0,
                dimes: 0,
                nickels: 0,
                pennies: 0}
    let text = "";

    for (let i = 0; i < 1000; i++){
        if (change - 2000 >= 0){
            coins.twenties ++;
            change -= 2000;
        }else {
            if (coins.twenties !== 0){
                text += "twentiesDollar: "+ coins.twenties + " "
            }
            break
        }
    }
    for (let i = 0; i < 3; i++){
        if (change - 1000 >= 0){
            coins.tens ++;
            change -= 1000;
        }else {
            if (coins.tens !== 0){
                text += "tensDollar: "+ coins.tens + " "
            }
            break
        }
    }
    for (let i = 0; i < 3; i++){
        if (change - 500 >= 0){
            coins.fives ++;
            change -= 500;
        }else{
            if (coins.fives !== 0){
                text += "fiveDollar: "+ coins.fives + " "
            }
            break
        }
    }
    for (let i = 0; i < 3; i++){
        if (change - 200 >= 0){
            coins.toonies ++;
            change -= 200;
        }else{
            if (coins.toonies !== 0){
                text += "twoDollar: "+ coins.toonies + " "
            }
            break
        }
    }
    for (let i = 0; i < 3; i++){
        if (change - 100 >= 0){
            coins.loonies ++;
            change -= 100;
        }else{
            if (coins.loonies !== 0){
                text += "oneDollar: "+ coins.loonies + " "
            }
            break
        }
    }
    for (let i = 0; i < 5; i++){
        if (change - 25 >= 0){
            coins.quaters ++;
            change -= 25;
        }else{
            if (coins.quaters !== 0){
                text += "quarter: "+ coins.quaters + " "
            }
            break
        }
    }
    for (let i = 0; i < 3; i++){
        if (change - 10 >= 0){
            coins.dimes ++;
            change -= 10;
        }else{
            if (coins.dimes !== 0){
                text += "dime: "+ coins.dimes + " "
            }
            break
        }
    }
    for (let i = 0; i < 3; i++){
        if (change - 5 >= 0){
            coins.nickels ++;
            change -= 5;
        }else{
            if (coins.nickels !== 0){
                text += "nickel: "+ coins.nickels + " "
            }
            break
        }
    }
    for (let i = 0; i < 6; i++){
        if (change - 1 >= 0){
            coins.pennies ++;
            change -= 1;
        }else{
            if (coins.pennies !== 0){
                text += "pennie: "+ coins.pennies + " "
            }
            break
        }
    }
    //console.log(coins);
    return(text);


}
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));