/*
1.class
2.Read only properties
3.Opttional property
4. Static variables and methods
*/

/*
4. Static variables and methods
  1) static properties/methods are common/shared across al the objects
  2) static properties/methods can be accessed through class name directly
  3) static properties/methods can be modifies using any object 
  4) we cannot use "this" for static properties, instead we can use class name
*/


class Student{
    readonly studentId:number; // Read-only property (can only be assigned once, inside constructor)
    name:string; // Regular property
    email?:string; // Optional property (can be undefined) 
    static schoolName:string = "Greenwood High School"; // Static variable shared among all instances/objects

    constructor(id:number, name:string,email?:string){
        this.studentId = id;
        this.name = name;
        this.email = email; // If you don't pass email then it is undefined
    }

    displayInfo():void {
        console.log("Student ID:",this.studentId)
        console.log("Student Name:",this.name)
        if (this.email != undefined)
            console.log("Email:",this.email)
        console.log(Student.schoolName) // access stats property using Student (class name)
    }

    static changeSchoolName(newName:string):void{
        Student.schoolName = newName;
    }
}

let s1 = new Student(101,"John");
let s2 = new Student(102,"Bob","bob@gmail.com")

// display student info

s1.displayInfo();
s2.displayInfo();

// change the school Name using static method

Student.changeSchoolName("Sunrise Academy")

// after changing static property
s1.displayInfo();
s2.displayInfo();

// s1.studentId = 111 // Cannot assign to 'studentId' because it is a read-only property.


