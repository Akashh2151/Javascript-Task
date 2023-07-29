var greet = "Good Morning Virat Dude";
var lengthGreet= greet.length;
console.log(greet,'Length of String is:', lengthGreet);

console.log(`------------------------------------`);
var charAt0 = greet.charAt(0);
console.log(`${greet} - Char at 0th index is ${charAt0}`);

var charAtLastIndex = greet.charAt(lengthGreet-1);
console.log(` Last Char is ${charAtLastIndex} of Index is ${lengthGreet}`);
console.log(`------------------------------------`);

var firstName = "Gajanan";
var lastName = " Kharat";
var result = firstName + lastName;
console.log(`concatenation String is  ${result}`);
var result = firstName.concat(lastName);
console.log(`My Full name is ${result}`);

console.log(`------------------------------------`);
var result = greet.indexOf('M');
console.log(`Index of char 'M' ${result}`);
var result = greet.indexOf('Dude');
console.log(`Index of sub string 'Dude' is : ${result}`);

console.log(`------------------------------------`);
var result = greet.includes('Virat');
console.log(`Result is ${result}`);

console.log(`------------------------------------`);
var result = greet.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);

console.log(`------------------------------------`);
var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);

console.log(`------------------------------------`);
var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(` End Spaces is : ${endSpaces} `);