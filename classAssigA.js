class vehicle{


constructor(name,garety,mialege,founded,speed){
    this.name=name
    this.founded=founded
    this.mialege=mialege
    this.garety=garety
    this.speed=speed
}

play(){
    console.log(`car name is: ${this.name} car speed is:${this.speed} car garenty is:${this.mialege} his car founded in : ${this. founded}`);
}


}
const person1= new vehicle("akash",2022,21,2035,150)
const person2= new vehicle("praksh",2023,24,2035,160)
const person3= new vehicle("omkar",2024,24,2035,170)
const person4= new vehicle("ankita",2025,23,2035,110)
const person5= new vehicle("jagdish",2026,24,2035,110)

let myvihicle=[person1,person2,person3,person4,person5]
person1.play()
person2.play()
person3.play()
person4.play()
person5.play()
 
// person.name()
console.log("_____________________________________________________________")

class collage{
    constructor(name,city,univercity,grad){
        this.name=name
        this.city=city
        this.univercity=univercity
        this.grad=grad
 }
    
    display(){
        console.log(`student name:${this.name} city name: ${this.city} university name: ${this.univercity} grad is: ${this.grad}`);
    }
    
}
let info1=new collage("akash","karad","shivajiuniversity","A+")
let info2=new collage("rohit","karad","shivajiuniversity","A+")
let info3=new collage("jagdish","karad","shivajiuniversity","A+")
let info4=new collage("mega","karad","shivajiuniversity","A+")
 

info1.display()
info2.display()
info3.display()
info4.display()

console.log("______________________________________________________________");


function travserobject(obj) {
    for (const key in obj) {
     console.log(`${key}: ${obj[key]}`);
            
        }
    }
    
console.log("traversion obj one");
travserobject(info1)
travserobject(info2)
travserobject(info3)
travserobject(info4)