function factorial(num) {
  if (num === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return num * factorial(num - 1); // Recursive case: multiply num with factorial(num-1)
  }
}

function calculateFactorials(numbers) {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    let result = factorial(numbers[i]);
    results.push(result);
  }
  return results;
}

let numbers = [5, 9, 11, 7];
let results = calculateFactorials(numbers);
console.log(results);
