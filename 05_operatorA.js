function squareOfWordLenght(value) {
    var l=value.length;
    console.log("~~~~~~~~~~~~~~~~1.1~~~~~~~~~~~~~~~~~~");
    console.log(`the values is ${l}`);
    console.log(`Its Length Square is ${l*l}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    
}
squareOfWordLenght("Javascript");
squareOfWordLenght("Google Chrome");
squareOfWordLenght("Developer Smart");

var word=function () {
    var line="I Am Angular Developer";
    var l= line.length
    var split = line.split(" ");
    var count =split.length;
    console.log("~~~~~~~~~~~~~~~~2.1~~~~~~~~~~~~~~~~~~");

    console.log(`Result is ${l/count}`);
    console.log("~~~~~~~~~~~~~~~~2.2~~~~~~~~~~~~~~~~~~");
    console.log(`Result is ${l*count}`);
    
    
}
word();
