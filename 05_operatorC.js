console.log("```````````````````````````````````````````````````Assignment - 1```````````````````````````````````````````````````");
var eligible = function(gradscore,hscscore,sscscore,candidateName) {
    if (gradscore>=70 || hscscore>=80 || sscscore>=90){
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    }
    else{
        console.log(`${candidateName} Unfortunately you are not eligible for interview`);
    }
    
}
eligible(80,86,90,"akash")
eligible(70,65,55,"Ad")
eligible(60,79,88,"mayur")