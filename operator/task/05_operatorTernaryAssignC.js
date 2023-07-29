console.log("```````````````````````````````````````````````````Assignment - 2.1``````````````````````````````````````````````");
function maleMarriageEligibility(gender,age,boyName) {
    if(gender = "Male" && age>=21){
        console.log(`hey ${boyName} you are eligible for marriage`);
    }
    else{
        console.log(`${boyName} you are not eligible for marriage`);
    }
}
maleMarriageEligibility("Male",25,"BillGates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("```````````````````````````````````````````````````Assignment - 2.2`````````````````````````````````````````````");
function femaleMarriageEligibility(gender,age,girlName) {
    var check=gender="Female"&& age>=18 ? `Hey ${girlName} your are eligible for marriage` : `${girlName} not eligible for marriage`  
    console.log(check);
    
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");