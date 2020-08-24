// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  // Put your solution here
  let vowels = ["a","e","i","o","u"]
  let answer ="";
  for (j in data){
    for (i in vowels){
      if(data[j] === vowels[i]){
        answer += data[j];
      }
    }
  }
  return answer;
};

console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));