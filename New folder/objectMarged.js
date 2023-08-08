let jenny = {
    fullName: "Jenny Musk",
    age: 22,
    city: "Pune",
    college: "COEP Pune", 
}
marks = {
    physics: 100,
    science: 99,
    math: 92
}

let mergedObject = Object.assign({} , jenny, marks);
console.table(mergedObject);