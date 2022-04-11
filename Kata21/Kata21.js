let prompt = require("prompt-sync")();

let answer = 0;
let number = Math.floor(Math.random()*100);
let guessArray = [];
console.log(number);

for(x = 0; answer != number; x++){
  answer = prompt("Guess a number: ");

  if(isNaN(answer)){
    console.log("That's not a number")
  }else{  
    answer *= 1;
    if(answer === "x"){
      break;
    }
    if(typeof answer === "number"){
      if(guessArray.includes(answer)){
        console.log("Already Guessed")
      }else if(answer > number){
        guessArray.push(answer);
        console.log("Too High");
      }else if (answer < number){
        guessArray.push(answer);
        console.log("Too Low");
      }else if(answer = number){
        guessArray.push(answer);
        console.log("You guessed correctly! It took you "+ guessArray.length + " attempts!");
        break 
      }
    }
  }
};