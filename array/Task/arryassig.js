const { count } = require("console");

const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log("_____________________________________");
console.log(`total ele is:${arrayNumber.length}`);
console.log("_____________________________________");
console.log(`access frist ele: ${arrayNumber[0]}`);
console.log(`access last ele: ${arrayNumber[10]}`);
console.log("_____________________________________");
console.log(`access last thrist ele: ${arrayNumber.slice(arrayNumber.length-3)}`);
 
console.log("________________odd number_____________________");
// con/st arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let oddNumbers = [];
for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] % 2 === 1) {
    oddNumbers.push(arrayNumber[i]);
  }
}
console.log(oddNumbers);
console.log("__________________even number_______________________________");
const evenNumbers = [];

for (let i = 0; i < arrayNumber.length; i++) {
    // console.log(arrayNumber[i]);
    if (arrayNumber[i] % 2 === 0) {
        evenNumbers.push(arrayNumber[i]);
    }
}
console.log(evenNumbers);
console.log("__________________find even opstion number sum_______________________________");
const evenpossion=[]

for (let i = 0; i < arrayNumber.length; i++) {
    // console.log(arrayNumber[i]);
    if (arrayNumber[i]%2==0) {
        evenpossion.push(arrayNumber[i])
        
        
    }
    
}
console.log(evenpossion[0]+evenpossion[1]+evenpossion[2]+evenpossion[3]);
console.log("__________________find odd opstion number sum_______________________________");
const oddpossion=[]

for (let i = 0; i < arrayNumber.length; i++) {
    // console.log(arrayNumber[i]);
    if (arrayNumber[i]%2==1) {
        oddpossion.push(arrayNumber[i])
        
        
    }
    
}
console.log(oddpossion);
console.log(oddpossion[0]+oddpossion[1]+oddpossion[2]+oddpossion[3]);
console.log("__________________all sum_______________________________");

let sum = 0;

for (let i = 0; i < arrayNumber.length; i++) {
    sum += arrayNumber[i];
}

console.log('The sum is:', sum);
console.log("__________________multiple by 5_______________________________");
const multiplesOfFive = [];

for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 5 === 0) {
        multiplesOfFive.push(arrayNumber[i]);
    }
}

console.log(multiplesOfFive);
console.log("__________________find 150 in array_______________________________");
const findnumber=[]
for (let i = 0; i < arrayNumber.length; i++) {
    // findnumber.push(arrayNumber[i])
    if (arrayNumber[i]>=150) {
        findnumber.push(arrayNumber[i])
        console.log(`${findnumber} is in array`);
    } else{   
    // console.log(`${findnumber} is not in  array`);
        console.log("150 is not in array");
    }

}
console.log(findnumber);

console.log("__________________find 23 in array_______________________________");
const findnumberr=[]
for (let i = 0; i < arrayNumber.length; i++) {
    // findnumber.push(arrayNumber[i])
    if (arrayNumber[i]!=23) {
        findnumberr.push(arrayNumber[i])
        console.log(`list of ele : ${findnumberr}`);
        break
    } else{   
        // console.log(`${findnumber} is not in  array`);
        findnumberr.push(arrayNumber[i])
        console.log(`yes its avalibe in array : ${findnumberr}`);
       
    }
    
}
console.log(findnumber);
console.log("__________________insert the number befor_______________________________");

arrayNumber.splice(3,0,55,66)
console.log(arrayNumber);
console.log("__________________delete ele  after index 4_______________________________");

arrayNumber.splice(4,1)
arrayNumber.splice(4,2)
arrayNumber.splice(4,3)
console.log(arrayNumber);