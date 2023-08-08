let jenny = {
    fullName: "Elon Musk",
    age: 22,
    city: "Pune",
    college: "COEP Pune",
    marks: {
        physics: 100,
        science: 99,
        math: 92
    } 
}

let maria = JSON.parse(JSON.stringify(jenny)); // Deep clone 
maria.marks.math = 100;
console.log(`Jenny Details: ${jenny.marks.math}`);
console.log(`Maria Details: ${maria.marks.math}`);