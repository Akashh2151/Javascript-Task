function oddpostionedchars(str) {
    let revstr=""
    let  name=str.replace(/\s/g, '')
    for (let index = 1; index <= name.length; index=index+2) {
        let chr=name.charAt(index)
        let marg=revstr.concat(chr)
    console.log(marg);
   }
    
}
oddpostionedchars("Hard work always pays back")
// oddpostionedchars("Soon i will be Angular IT")
console.log("_______________________________________________");
function oddpostionedchars2(str) {
    let revstr=""
    let  name=str.replace(/\s/g, '')
    for (let index = 1; index <= name.length; index=index+2) {
        let chr=name.charAt(index)
        let marg=revstr.concat(chr)
    console.log(marg);
   }
    
}
// oddpostionedchars("Hard work always pays back")
oddpostionedchars2("Soon i will be Angular IT")