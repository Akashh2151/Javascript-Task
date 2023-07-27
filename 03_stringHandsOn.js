function stringHandsOn() {
     console.log('************************Step1*********************************');
     console.log("print of given string =>  Hey your doing good , keep it up");
     console.log('************************Step2*********************************');
     var string="  Hey your doing good , keep it up  "
     console.log(`length of string is :${string.length}`);
     console.log('************************Step3*********************************');
     var one=string.trim()  
     console.log(`before trim :${string.length}   After trim :${one.length}`);  
     console.log('************************Step4*********************************');  
     console.log(`total number of removed spaces is :${string.length-one.length}`);  
     console.log('************************Step5*********************************');
     var last=string.length;
     var lastword=string.charAt(last-1)
     console.log(`first char is :${one.charAt(0)} Last Char is :${lastword}`); 
     console.log('************************Step6*********************************');
     var count= one.split(' ');
     var list= count.length;
     console.log(`Total number of words are :${list}`);
     console.log('************************Step7*********************************');
     var word = one.indexOf('good')
     console.log(`Index word of good is :${word}`);
     console.log('************************Step8*********************************');
     var wordd=one.substring(22)
     console.log(`substring starting 22 :${wordd}`);
     console.log('************************Step9*********************************');
     var check=one.endsWith('up');
     console.log(`String end with word up : ${check}`);
     console.log('************************Step10********************************');
     var ckeck2=one.startsWith('Hey');
     console.log(`String start with word Hey : ${ckeck2}`);

}
stringHandsOn();


