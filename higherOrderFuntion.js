function greet(callback){
    console.log(`Good Morning`);
    callback();
    let inner = function(){
        console.log(`Thank you, I am fine...`);
    }
    return inner;
}
function inquire(){
    console.log(`How are you... ?`);
}
 greet(inquire)();