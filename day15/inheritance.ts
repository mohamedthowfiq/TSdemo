// Inheritance:
// A class can reuse the properties and methods of another class
// Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class(parent)
// Inheritance allows you to resuse the functionality of an existing class withour rewriting it.

//Method Overriding
// A Subclass can provide a specific implementation of a method that is already defined in its superclass
// The method must have the same name, return type, and parameters

// A----properties + methods (Parent class/ BaseClass/ Super class)
// B extends A--- properties+methods (Child class/ derived class/ Sub class)

class Car
{
    name: string
    color : string
    model : string

    constructor(name:string, color:string, model:string)
    {
        this.name = name
        this.color=color
        this.model=model
    }

    start(){
        console.log("Car started...")
    }
    stop(){
        console.log("Car stopped")
    }

    displayInformation()
    {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`)
    }
}

// Child class
class Honda extends Car
{
    year:number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model)
        this.year = year
    }

    // Method overriding
    start(){
        console.log("Honda started...")
    }
    yearofmanuf(){
        console.log(`Year of Manufacture: ${this.year}`)
    }
}

// Child class - Maruthi

class Maruthi extends Car
{
     year:number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model)
        this.year = year
    }

    // Method overriding
    start(){
        console.log("Maruthi started...")
    }
    yearofmanuf(){
        console.log(`Year of Manufacture: ${this.year}`)
    }
}

// Usage

// Create Honda object

let honda = new Honda("Honda","Red","Honda city", 2020);

console.log(honda.name)

honda.start(); // called child class method(overrided)
