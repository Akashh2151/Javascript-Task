// 5! = 1 * 2 * 3 * 4 * 5

let resultt = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = resultt * index;
}
console.log(`Factorial of 5 is ${resultt}`);

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7




function factorial(num) {
    if (num === 0) {
       return 1; // Base case: factorial of 0 is 1
    } else {
       return num * factorial(num - 1); // Recursive case: multiply num with factorial(num-1)
    }
 }
 
 var result = factorial(5);
 console.log(`Factorial using recursion is: ${result}`);