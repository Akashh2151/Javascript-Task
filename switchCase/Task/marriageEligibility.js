function ageeligibility(gender, age) {
    if (age >= 21 && gender == "male") {
        console.log(
            `Your gender is: ${gender} and age is: ${age} Your eligible for Marriage`
        
            );
            return
    }
    if (age >= 18 && gender == "female" ) {
        console.log(
            `Your gender is: ${gender} and age is: ${age} Your eligible for Marriage`
        );
    } 
    else {
        console.log(
            `Your gender is: ${gender} and age is: ${age} Enter valid input`
        );
    }
}
ageeligibility("male", 17);
ageeligibility("male", 25);
ageeligibility("female", 28);
ageeligibility("female", 16);
ageeligibility("other", 35);
ageeligibility("other", 41);
