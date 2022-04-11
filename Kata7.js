const checkAir = function (samples, threshold) {
  let x = 0; // Number of dirty samples
  for(let i = 0; i < samples.length; i++){
    samples[i] === "dirty" ? x++ : false
  }
  //If percentage of dirty samples vs samples taken is greater or equal to the threshold return "polluted" else return clean
  if(x/samples.length >= threshold){ 
    return "polluted";
  }else return "clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))