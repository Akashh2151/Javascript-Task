 

let studentInfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;


const convertedData = JSON.parse(studentInfo);
console.log(convertedData);

// Accessing the roles array
console.log("assing only dev word: ",convertedData.role[0]); 

 
console.log("_______________________________________________________");


const fullName = convertedData.name; // "Aleix Melon"
const lastName = fullName.split(" ")[1]; // "Melon"
console.log("accessing last name: ",lastName); // This will log "Melon"