let addressStr = `{
    "flatNo": 307,
    "building": "B",
    "street": "Datta Mandir Road",
    "location": "Wakad",
    "pin": 411057,
    "owners": ["Lalu Devant", "Shalu Devant" ]
}`;
console.log(`type of addressStr  ==> ${typeof addressStr}`);

const address = JSON.parse(addressStr); // Convert from JSON format to object
console.log(` address type of ==>  ${typeof address}`);
console.log(address);
console.log(address.location);
console.log(address.owners);

console.log(`==========================`);
const student = {
    rollNo: 123,
    fullName: "Jenny Atand",
    marks: "98%",
    awards: {
        hsc: "School topper",
        ssc: "Division Topper",
        graduation: "Gold Medalist"
    }
}
let studentStr = JSON.stringify(student); // convert object to json 
console.log(studentStr);