// ______________________________________________________________________________________________________
 
function condition(a,b,c,d) {
    console.log("_________________________________________");
    if(a%2===0){
        console.log(`number ${a} is even`);
    }
    else{
        console.log(`number ${a} is odd`);
    }
    if(b%2===0){
        console.log(`number ${b} is even`);
    }
    else{
        console.log(`number ${b} is odd`);
    }
    if(c%2===0){
        console.log(`number ${c} is even`);
    }
    else{
        console.log(`number ${c} is odd`);
    }
    if(d%2===0){
        console.log(`number ${d} is even`);
    }
    else{
        console.log(`number ${d} is odd`);
    }
    console.log("_________________________________________");
 }
 condition(45,70,67,98)

 // ______________________________________________________________________________________________________
 
 function condition2() {
     var char="javaScript-ES6"
    var char2=char.length;
    if(char2>=10){
        console.log(`${char} is contained more then 10 character`);
    }
    else{
        console.log(`${char} is not contaoned more then 10 character`);
    }
    console.log("_________________________________________");
}
condition2()

// ______________________________________________________________________________________________________

function condition3() {
    var char="javaScript Language"
    var char2=char.startsWith("java");
    if(char2==true){
        console.log(`word: ${char} started from java `);
    }
    else{
        console.log(`word: ${char} not started from java `);
    }
    console.log("_________________________________________");
}
condition3()

// ______________________________________________________________________________________________________