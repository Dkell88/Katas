const camelCase = function(input) {
    let stringArray = input.split(" ");
    let text = "";

    for (let i = 0; i < stringArray.length; i++){
        if(i === 0){
            text += stringArray[i];
        }else text += stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
    return(text);
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));