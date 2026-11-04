// Method Overloading and Constructor Overloading in TypeScript

class Calculator
{
    // Constructor overloading
    constructor(); // default construcot
    constructor(a:number, b:number); // parameterized constructor
    
    constructor(a?:number,b?:number)
    {
        if (a!=undefined && b!=undefined){
            console.log("Sum of a & b :",(a+b))
        }else{
            console.log("Default constructor called...")
        }
    }
    

    // Method Overloading

    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number{
        if (c!=undefined){
            return a+b+c
        }
        return a + b
        
    }
}

// example for  Constructor overloading
let calc1 = new Calculator(1,2)
let calc2 = new Calculator()

// example for method overloading

console.log(calc1.add(1,2))
console.log(calc2.add(1,2,3))

