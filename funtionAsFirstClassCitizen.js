// In JS we call function as first class citizen
// 1. Function expression
// 2. Callback
// 3. Function can return another function

function show() {
    console.log('inside show function');
    let innerFunction = function(){
        console.log('Inside inner function');
    }
    return innerFunction;
}
let inner = show();
inner();
// show()();