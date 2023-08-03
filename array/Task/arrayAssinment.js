const arrayFruits=["banana","Orange","Apple","mongo","watermelon"];
console.log(arrayFruits);
console.log("_________________________________");
console.log(`frist element is: ${arrayFruits[0]}`);
console.log(`last element is: ${arrayFruits[4]}`)
console.log("_________________________________");
arrayFruits.unshift("papaya")
console.log(`adding ele befor the banana: ${arrayFruits}`)
console.log("_________________________________");
arrayFruits.splice(4,1)
console.log(`remove ele mango : ${arrayFruits}`)
console.log("_________________________________");
arrayFruits.push("pineapple")
console.log(`adding ele at end of arry: ${arrayFruits}`)
console.log("_________________________________");
// arrayFruits.push("pineapple")
arrayFruits.splice(4,0,"dragon fruit");
console.log(`after inserting ele is: ${ arrayFruits}`)
console.log("_________________________________");
arrayFruits.splice(2,1,"kiwi");
console.log(`after adding element is: ${ arrayFruits}`)
console.log("_________________________________");
let arr1=arrayFruits.slice(1,4)
console.log(`access frist ele in array is: ${ arr1}`)
console.log("_________________________________");


