// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  // Put your solution here
  
  let answer= "";
  let longest = 0;
  for(i = 0; i < instructors.length; i++){
    
    name = instructors[i].first.length + instructors[i].last.length;
    
    if (name > longest){
      longest = name;
      answer = instructors[i].first + " " + instructors[i].last;
    } 
  }

  return  answer;
};

console.log(LongestName([
  {first: "Samuel", last: "Sanderson"},
  {first: "Jeremiah", last: "Web"},
  {first: "Ophilia", last: "Rich"},
  {first: "Donald", last: "kant"}
]));
console.log(LongestName([
  {first: "Matthew", last: "Ebert"},
  {first: "David", last: "John"},
  {first: "Domascus", last: "Anderson"}
]));