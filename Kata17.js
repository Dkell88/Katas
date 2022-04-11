
const urlDecode = function(text) {
  let returnedObj = {};
  let numOfKeys = 1;
  let index = 1;

  //Determine how many keys have been passed to the function
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "&") {
      numOfKeys ++;
    }
  }
  //loop throught the text based on the number of keys found
  for (let j = 0; j < numOfKeys; j++) {
    //create a new key for eac one found
    returnedObj[findKey(text, index)] = [];
    //Find a value for each key and puch it into the correct key
    returnedObj[findKey(text, index)].push(findValue(text, index));
    index ++;
  }
  return returnedObj;
};
  
const findKey = function(text, index) {
  let string = "";
  let start = false;
  let keyNum = 1;

  //loop through the text
  for (let i = 0; i < text.length; i++) {
    //Don't start collecting characters until the index = the key num
    if (index === keyNum) {
      start = true;
    }
    //If not started search for the next key-value by looking for a "&""
    if (!start && text[i] === "&") {
      keyNum++;
    }
    //Once started start adding characters to the string, until a "=" is reached
    if (start) {
      if (text[i] === "=") {
        break;
      } else string += text[i];
    }
  }
  return string;
};

const findValue = function(text, index) {
  let string = "";
  let start = false;
  let keyNum = 1;
  //loop through the text
  for (let i = 0; i < text.length; i++) {
    //Don't start collecting characters unit the index = the key number
    if (index === keyNum && text[i] === "=") {
      start = true;
      i++;
    }
    //If not started search for the next key-value by looking for a "=""
    if (!start && text[i] === "=") {
      keyNum++;
    }
    //Once started start adding chacters to the string until the next "&" is found
    if (start) {
      if (text[i] === "&") {
        break;
      }
      //replace "%20" with a space
      if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0") {
        string += " ";
        i += 2;
      } else string += text[i];
    }

  }
  return string;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);