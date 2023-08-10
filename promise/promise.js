let isNotesPrepared = false;
let promise = new Promise(function(resolve, reject){
    if (isNotesPrepared) {
        resolve(`Takes this notes guys and be prepared please`);
    }else{
        reject(`Sorry guys, I can't share notes as I didn't get time`);
    }
});
promise.then(function(success){
    console.log(`------- on success - then()  --------`);
    console.log(`Thank you with smiley`);
    console.log(success);
}).catch(function(failure){
    console.log(`------- on failure - catch()  --------`);
    console.log(`Kya sir.. thoda time nikal sakathe te`);
    console.log(failure);
}).finally(function(){
    console.log(`------- finally  --------`);
    console.log(`I must have notes whether Sir would share it or not`);
})