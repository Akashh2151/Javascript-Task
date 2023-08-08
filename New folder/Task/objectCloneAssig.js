let personaldetailss={
    name :"jagdish",
    fathername:"laxman",
    adress:"near mahadev mandir kole",
    contactno:9689511749,
}


let collageDetailss={
        namee:"akash",
        clgname:"yccsk",
        mobail:9689511749,
        rollno:2151

}

let merged=Object.assign({},personaldetailss,collageDetailss);
console.table(merged);

console.log("____________________________________________________________________________");

let friend={
    name:"akash",
    clg:"yc",
    contact:9689511749
}

let aksh=Object.freeze(friend.name)

for (const index in friend) {
    if (index=="name") {
        console.log(friend[index])
        
    }
}
console.log("____________________________________________________________________________");

let myinput="technology"

let splited=myinput.split(" ")

let revserdword=""

console.log(splited);

for (let index = myinput.length-1; index >= 0; index--) {
    revserdword+=myinput[index]
    
}
console.log(revserdword);