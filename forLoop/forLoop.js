var num=10;
var num2=num++
console.log("value of num",num);
console.log("value of num2",num2);

var num4=10;
var num5=++num4; //num4=num4+1
console.log("value of num4",num4);
console.log("value of num5",num5);

var num6=5;
var num7=--num6;  //num7=num-1
console.log("value of num6",num6);
console.log("value of num7",num7);


console.log("_____________________________________________");
// 0 to 10
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
console.log("_____________________________________________");
//log number 5 to 20
for (let index = 5; index <= 20; index++) {
    console.log(index);
}
console.log("_____________________________________________");
// 10 to 1
for (let index = 10; index >= 1; index--) {
    console.log(index);
}
console.log("_____________________________________________");
// 5 table
for (let index = 5; index <= 50; index=index+5) {
    console.log(index); 
}
console.log("_____________________________________________");
// 7 reverse table
for (let index = 70; index >=7; index=index-7) {
    console.log(index); 
}
console.log("_____________________________________________");
// frist 5 odd number
for (let index = 1; index < 10; index=index+2) {
    console.log(index);
}
console.log("_____________________________________________");
// frist 15 even number
for (let index = 0; index < 30; index=index+2) {
    console.log(index); 
}
console.log("__________________while loop___________________________");

var i=1;
while (i<=10) {
    console.log(i);
    i++;
}
