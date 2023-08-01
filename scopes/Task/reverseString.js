function reverese(str1){ 
    let revstr=""; 
    for(let i=str1.length-1;i>=0;i--){ 
        let chr = str1.charAt(i);
         if(chr!=" "){ 
            revstr = revstr + (chr);
         }
} 
console.log(`"${str1}" after reverse it will be :"${revstr}"`);}
reverese("Hard work are always pays back");
console.log(`------------------------------`);
reverese("Soon I will be Angular champ")