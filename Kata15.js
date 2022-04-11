const organizeInstructors = function(instructors) {
    let instList = {};
    for(let instructor of instructors){
        if(!instList[instructor.course]){
            instList[instructor.course] = [];
        }
        instList[instructor.course].push(instructor.name);
    }
    return instList;
  };
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));