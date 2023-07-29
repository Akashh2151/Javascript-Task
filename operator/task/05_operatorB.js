console.log("~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~~");
var greaterNumber= function (a,b) {
    var g=a>b ? a:b;
    console.log(`Greatest number is ${g}`);
}   
greaterNumber(10,-10);
greaterNumber(800,899);  

console.log("~~~~~~~~~~~~~~~~~~~~2~~~~~~~~~~~~~~~~~~~~~");
var isEvenOrOddNum = function (number) {
    var check=number%2==0 ? "True" : "False" ;
    console.log(`${number} is even number ${check}`);    
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("~~~~~~~~~~~~~~~~~~~~3~~~~~~~~~~~~~~~~~~~~~");
var wordLength = function (word) {
    var length=word.length
    var result= length%2==0 ? "even":"odd";
    console.log(`Length of ${word} is ${result}`);
}
wordLength("Javascript");
wordLength("Developer");
wordLength("Google");