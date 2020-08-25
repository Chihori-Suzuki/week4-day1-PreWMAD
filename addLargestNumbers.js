const addLargestNumbers = function(data) {
  // Put your solution here
  let answer = 0;

  /* another answer */
  // function compareNumbers(a, b) {
  //   return a - b;
  // }
  // data.sort(compareNumbers);
  // answer = data[data.length-1] + data[data.length-2];

  let largest = -Infinity;
  let secLargest = -Infinity;
  for (i in data){
      if (data[i] > largest){
        largest = data[i];
        secLargest = largest;
      }else if(data[i]< largest && data[i] > secLargest){
        secLargest = data[i];
      }
  }
  answer = largest + secLargest;
  return answer;
};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(addLargestNumbers([-10, -4, -34, -6, -92, -2]));

