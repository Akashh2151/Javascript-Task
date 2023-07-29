var firstName = "Gajanan";

console.log(firstName);

console.log(typeof firstName);

 

var age = 32;

console.log(age);

console.log(typeof age);

 

var isMarried = true;

console.log(isMarried);

console.log(typeof isMarried);

 

var city = 'Pune';

console.log(typeof city);

city = 50000;

console.log(typeof city);



console.log('=======================================');
var salary = null;
console.log(typeof salary);
salary = 40000.50; // 
var typeOfSalary = typeof salary;
console.log('salary=>', salary, 'typeof salary =>', typeOfSalary);
salary = "Forty Thousand";
var salaryTypeOf = typeof salary;
console.log('salary=>', salary, 'typeof=>', salaryTypeOf);

var num1 = 100; // 200
var num2 = 200; // 100
console.log( 'Before Swap' ,'num1 - ', num1, ' num2 - ', num2);
var temp = num1;
num1 = num2;
num2 = temp;
console.log(temp, num1, num2);
console.log( 'After Swap' ,'num1 - ', num1, ' num2 - ', num2);

function swap(n1, n2){ // n1, n2 arguments or parameters n1=100   n2=200
    console.log('Inside swap function');
    console.log('Before Swap=> n1', n1, " n2", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1', n1, " n2", n2 );
}
var num1 = 100;
var num2 = 200;
swap(num1, num2);// Function call or invocation

var sweety = "Sweety";
var cutie = "Cutey";
swap(sweety, cutie);

var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);
console.log('End of program');