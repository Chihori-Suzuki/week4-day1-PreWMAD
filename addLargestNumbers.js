const addLargestNumbers = function(data) {
  // Put your solution here
  let answer = 0;

  function compareNumbers(a, b) {
    return a - b;
  }
  data.sort(compareNumbers);
  answer = data[data.length-1] + data[data.length-2];

  return answer;
};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));

