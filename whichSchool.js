const whichSchool  = function (age) {
  // Your code in here ...
  var school = "";
  if(age < 13){
    school = "Elementary School"; 
  }else if(age >= 13 && age <= 18 ){
    school = "Secondary School";
  }else{
    school = "Lighthouse Labs";
  }
  return school; 
}

console.log(whichSchool(5));
console.log(whichSchool(13));
console.log(whichSchool(21));