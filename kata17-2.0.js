const urlDecode = function(string) {

  const result = {};

  //Since the replace all function doesn't work in Node 12, write a loop to remove all "%20"
  do {
    string = string.replace('%20', " ");
  } while (string.includes('%20'));
  
  //Split the string into a array searching for "&" each will represent a keys and values pair.
  const splitString = string.split('&');

  //Iterate through the split string (key/value pairs) and seperate the key from the value and store it in the results object.
  for (let stringOf of splitString) {
    const objString = stringOf.split('=');
    result[objString[0]] = objString[1];
  }
  return result;

};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);