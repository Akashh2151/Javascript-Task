let banklocation={
    location:"baner",
    city:"pune",
    pincode:12345
}

let banksbi={
    name:"SBI Bank",
    brach:"kole",
    accountid:123456,
    balance:10000000
   
}


const clonesbi= Object.assign({},banksbi);
const  clonebanklocation=Object.assign({},banklocation);


const clonesbii={ ...banksbi };
const clonebanklocationn={ ...banklocation} ;


console.log(`clone banksib`,clonesbii);
console.log(`clone location`,clonebanklocation);


console.log("________________________________________________________");

const rateOfInterest = {
  homeLoanInterest: 5.5,
  personalLoanInterest: 8,
  duelInterest: 10.5
};

const sbiDetails = { ...banksbi, ...banklocation, ...rateOfInterest };

console.log("Merged sbiDetails:");
for (const property in sbiDetails) {
  console.log(`${property}: ${sbiDetails[property]}`);
}


console.log("Traversing sbiDetails:");
for (const property in sbiDetails) {
  console.log(`${property}: ${sbiDetails[property]}`);
}
