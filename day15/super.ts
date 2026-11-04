// super() - used to invoke immediate parent class contructor
// super - used to invoke immediate parent class method
// super - cannot be used to invoke the parent class property. (In Java, it is possible)


class Parent{
    num:number=10

    constructor(){
        console.log("This is PArent class constructor")
    }
    display(){
        console.log("This is display() method from PArent class...")
    }
}

class Child extends Parent{
    num:number=20 // overriden
    constructor(){
        super()// this will call parent class constructor (must be called)
        console.log("This is child class constructor...")
    }
    show(){
        // console.log(super.num) // parent's num // TS doesn't support super.num to access parent class properties directly like java does
        console.log(this.num)
        console.log("This is show() mehtod from the child class")
    }
    // overrided method
    display(){
        super.display(); // This is invoke parent class method
        console.log("This is display() method from child class...")
    }
}

let c1 = new Child

c1.show() // child class
c1.display() // child class
