function primenumber(num) {
   
   for (let index = 2; index <= 10; index++)
    if (num % index == 0) {
        console.log("its prime",num);
        break
    } else {
        console.log("its not prime",num);
        break  
    }
    
}
primenumber(11)   //invok function
primenumber(21)   //invok function

