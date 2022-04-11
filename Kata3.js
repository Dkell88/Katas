const numberOfVowels = function(data) {
  let tempArr = data.toLowerCase();
  const regex = /['a''e''i''o''u']/g;
  const found = tempArr.match(regex);
  return found.length
};

/*const numberOfVowels = function(data) {
  let sum = 0;
  let tempArr = data.toLowerCase();
  for(let i = 0; i < tempArr.length; i++){
    if(tempArr.charAt(i) === 'a'||tempArr.charAt(i) === 'e'||tempArr.charAt(i) === 'i'||tempArr.charAt(i) === 'o'||tempArr.charAt(i) === 'u'){
      sum ++;
    }    
  }
  return sum
}*/

console.log(numberOfVowels("Orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));