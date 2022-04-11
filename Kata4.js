const instructorWithLongestName = function(instructors) {
  //Sort the instrutors array by length of the name attribute. 
  instructors.sort(function(a,b){
    if (a.name.length > b.name.length){
      return -1;
    }if (a.name.length < b.name.length){
      return 1;
    }return 0;
  })
  //After sorting return the first longest name
  return instructors[0]
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Domascus", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));