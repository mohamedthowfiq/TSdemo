// Parent class

class Person{
    public name:string // public propert - accessible anywhere
    protected age:number // protected property - accessible within the class and it's subclass
    private ssn:number // private property - accessible only within this class

    constructor(name:string, age:number, ssn:number){
        this.name = name
        this.age = age
        this.ssn = ssn
    }

    display(){
        console.log("Name :",this.name)
        console.log("Age :",this.age)
        console.log("ssn :",this.ssn)
    }
}

//Child class

class Employee extends Person{
    private employeeId:number;
    constructor(name:string, age:number, ssn:number,employeeId:number){
        super(name,age,ssn)
        this.employeeId = employeeId
    }

    showEmployeeDetails(){
        console.log("Name:",this.name) //Public
        console.log("Age:",this.age) // Protected
        //console.log("ssn:",this.ssn) // Private
        console.log(this.employeeId) // private, still we can access since it is declared inside the same class
    }
}

let emp = new Employee("John",30,8989,201)