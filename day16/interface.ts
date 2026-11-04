/*
 1. An interface in typescript is a way to define the structure of an object
 2. It tells the compiler what properties an types an object should have
 3. It's like a blueprint for objects

 Abstract method: only signature of the method (there is no implementation)

 syntax:
    interface InterfaceName{
    properties
    abstract methods
    }

    1.Regular properties
    2.Optional properties
    3.Readonly properties & function types
    4.Extending interface
    5.Class implements interface
*/

// Example 1: Basic interface

interface Person
{
    name:string
    age:number
}

let student: Person = { name:"John",age:30 }
// console.log(student.name)


// Example 2: Optional Properties (?)

interface Employee{
    id:number
    name:string
    department?:string // optional porperty
}

let emp:Employee = {
    id : 101,
    name : "John",
}

let emp1:Employee = {
    id : 102,
    name : "Doe",
    department : "Support"
}

// Example 3: Readonly properties (readonly to prevent modification) & Function type

interface Book{
    title : string
    readonly isbn : string

    display():void;

}

let b1:Book={
    title:"Learn Playwright",
    isbn:"123-ABC",

    display() {
        console.log(`${b1.title}, ${b1.isbn}`)
    },
}
// console.log(b1.title)
// console.log(b1.isbn)
// b1.display()


// Example 4: Extending Interface (Inheritance is applicable)\

// Parent interface
interface Animal{
    name:string
}

//Child interface
interface Dog extends Animal{
    color:string
}

let myDog:Dog={
    name:"Buddy",
    color:"Black"
}

// console.log(myDog.name,myDog.color)

// Example 5:

 /* Class can extends another another class
 interface can extends another interface 
 
 class can implement interface, cannot extends each other
 */

 interface Car{
    name:String
    sound():void
 }

 class Maruthi implements Car{
    name:string // inherited from interface Car
    static color:string // property belongs Maruthi
    
    constructor(name:string,color:string){
        this.name = name
        // this.color = color
    }

    sound(): void {
        console.log("Maruthi sound...")
    }


 }

 let vehicle = new Maruthi("Suzuki","White")

 console.log(vehicle.name)
 vehicle.sound()
