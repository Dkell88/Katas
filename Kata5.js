const urlEncode = function(text) {
  tempText = ""; // Recreate the text attribute
  //Loop through each character in the text attribute
  for(let i = 0; i < text.length; i++){
    //Look for the "space" character 
    if(text[i] === " "){
      //If the "space" is prededing, the last character, or is followed by another space do not replace it with a "%20" ignore it.
      if(tempText.length !== 0 && i !== text.length-1 && text[i+1] !== " "){
        tempText += '%20';
      }
      //If the character is not a "space" add it to the tempText variable
    }else tempText += text[i]
  }
  return tempText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("    Lighthouse Labs   "));
console.log(urlEncode("blue is greener than purple for sure"));