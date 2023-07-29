console.log("*********************************************Bank*******************************************************");
function bankDetails(bankName,accountNum,location,pinCode) {
    console.log("Bank name is :", bankName,"Account number is :",accountNum,"Location is :",location,"Pincode is :",pinCode);
}
bankDetails("City bank",123123123,"Pune",123123)
bankDetails("Axis bank",123123123,"Mumbai",123123)
bankDetails("HDFC bank",123123123,"Pune",123123)
console.log("**********************************No Argument, No Return Type*******************************************");
function msg() {
    console.log("No Argument");
}
msg();

function msg2() {
    console.log("No Return Type");
}
msg2();

console.log("**********************************Persnal Details*******************************************************");

function persnalDetails(firstName,lastName,collegeName) {
    console.log("First Name:",firstName,"Last Name:",lastName,"College Name:",collegeName);
}
persnalDetails("akash","desai","YMIM Karad")

console.log("**********************************Swap Values***********************************************************");
function swapValues(a,b) {
    console.log("before swap :",a,b);
    c=a
    a=b
    b=c
    console.log("After swap :",a,b);
}
swapValues("Virat","Anushka")
swapValues(1000,2000)

console.log("**********************************add Values***********************************************************");
function addThreeValues(a,b,c) {
    console.log(a+b+c);
    
}
addThreeValues(10.23,600,40)
addThreeValues("Hello","Good","Morning")