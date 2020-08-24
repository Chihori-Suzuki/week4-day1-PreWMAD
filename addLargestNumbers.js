const addLargestNumbers = function(data) {
  // Put your solution here
  let answer = 0;

  /* another answer */
  // function compareNumbers(a, b) {
  //   return a - b;
  // }
  // data.sort(compareNumbers);
  // answer = data[data.length-1] + data[data.length-2];

  let longest = 0;
  let secLongest = 0;
  for (i in data){
    for(j in data){
      if (data[j] > longest){
        longest = data[j];
      }else if(data[j]< longest && data[j] > secLongest){
        secLongest = data[j];
      }
    }
  }
  answer = longest + secLongest;
  return answer;
};

// console.log(addLargestNumbers([1, 10]));
// console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));

