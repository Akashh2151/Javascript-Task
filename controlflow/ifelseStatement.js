var num = 23;
if (num>30) {
    console.log(num);
}
console.log(`After if block`);

var num = 23;
if (num%2==0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}



function voteEligibility(age, name){
    // if block to handle all invalid scenarios
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>120) {
        console.log(`${name} your age ${age} is invalid`); 
    } else {
        // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`${name} you are eligible for vote`);
        } else {
            console.log(`${name} you are not eligible for vote`);
        }
    }
}
voteEligibility(23, "Jenny");
voteEligibility(-20, "Jenny");
voteEligibility("UK", "Jenny");
voteEligibility("30", "Jenny");
voteEligibility(null, "Jenny");
voteEligibility(undefined, "Jenny");
voteEligibility(150, "Jenny");
voteEligibility(120, "Jenny");