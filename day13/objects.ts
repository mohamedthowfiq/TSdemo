//Object - object contains properties and behaviour.
// object contains variables & methods.
// object is collection of key and value pairs.

//Ex:

// employee --name, desig, sal, dep
//             bonus(), getdetails(), setdetails()

//student - name, sid, grade
//          getdetails(), setdetails()


// Different ways to create an object in JS/TS //

// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS ES16/TS)

//#####################################################################################

// 1. using 'object' type - Directly define the values fro variables
// The TypeScript 'object' type represents all values that are not primitive types

let emp = {
    name : "John",
    salary : 500000,
    job : "Engineer",
    getDetails:function(){
        return `${this.name} is a ${this.job} earning ${this.salary}`
    }
}
// accessing obj - approach 1 (using dot notation)
console.log(emp.getDetails())
console.log(emp.name)

// accessing obj - approach 1 (using braket notation)
console.log(emp["salary"]);
console.log(emp['getDetails']())


// modify the value

console.log(emp.job = "Manager")
console.log(emp['job'] = "Engineer")

//#####################################################################

// 2. Inline Type Objet - we also define the datatype of the keys(only in Typescript)

let student:{
    name:String,
    age:number,
    grade:string,
    getSummary:()=>string
} = {
    name:"Scott",
    age :15,
    grade:"A",
    getSummary:function(){
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student.getSummary())

//#######################################################################################

// Using 'type' alias (only TypeScript): allows creating a new name for an existing type

// Example 1:

type Product={
    name: string,
    price : number,
    getInfo:()=>string,
}

let book1:Product={
    name:'Learn java',
    price:300,
    getInfo:function(){
        return `${this.name} cost ${this.price}`
    }
}

let book2:Product={
    name:'Learn python',
    price:600,
    getInfo:function(){
        return `${this.name} cost ${this.price}`
    }
}

console.log(book1.getInfo())
console.log(book2.getInfo())


// Example 2 : Intersection Types

type Personal={
    name:string,
    age:number
};
type Contact={
    email:string,
    phone:number
}
type Candidate = Personal & Contact &
{
    getContactInfo:()=>string;
}

let candidate: Candidate={
    name:"Scott",
    age:25,
    email:"abc@gmail.com",
    phone:1234567890,
    getContactInfo:function(){
        return `${this.name} and ${this.age} and ${this.email} and ${this.phone}`
    }
}
console.log(candidate.getContactInfo())
//############################################################################

// 4. Using the class (JS ES16/TS)

class Person{
    ssn:string;
    firstname:string;
    lastname:string;

    constructor(ssn:string,firstname:string,lastname:string)
    {
        this.ssn=ssn;
        this.firstname = firstname;
        this.lastname = lastname;

    }
    getFullNAme():string{
        return `${this.firstname} ${this.lastname}`
    }
    getDetails():string{
            return `${this.ssn} ${this.getFullNAme()}`
    }
}

// object creation
let person1 = new Person("1001","john","Doe");

console.log(person1.getDetails())
