/* 
1. Primitive Data Types
Number, 
String, 
Boolean, 
Null, 
Undefined, 
Any, 
Union Type, 
void

2. Non-Primitive Data Types
Array, 
Class, 
Function, 
Interface, 
Tuple
*/


// 1. NUMBER TYPE
// Represents both integers and floating-point numbers

/*
let age:number=25;
let price=25.5;
let big=4234234234;

console.log("Age:",age);     // Age: 30
console.log("Price:",price);
console.log("Big Number:",big);

console.log(typeof(age))
console.log(typeof age)
*/

// #############################################################################################
 
// 2. STRING TYPE
// Represents textual data

/*
1. SingleQuote ('')
2. DoubleQuote ("")
3. Backtick(``)
*/
/* 
let firstName:string="John";
let lastName:string="Kenedy";

//console.log("Hello",firstName,lastName);  // Hello John Kenedy.

let greeting:string=`Hello,${firstName}, ${lastName}`;  // Hello, John, Kenedy
console.log(greeting);  */

// #############################################################################################


// 3. BOOLEAN TYPE
// Represents logical values: true or false


// #############################################################################################


// 4. NULL TYPE and UNDEFINED TYPE
// Special types for absence of value

// let emptyValue:null=null;
// let notDefined:undefined=undefined;
// console.log(emptyValue);
// console.log(notDefined);   // null undefined

// let price:number;
// console.log(price);  // undefined   



// 5. ANY TYPE
// loses TypeScript benefits

/* let value:any="Welcome";
console.log(typeof(value))

value=100;
console.log(typeof(value))

value=true;
console.log(typeof(value))

console.log(value); */


// 6. UNION TYPE - Combine multiple types

/* let id:number | string | boolean;

id="ABC123";
console.log(id);

id=12345;
console.log(id);

id=true;
console.log(id); */

// 7. VOID TYPE
// Used for functions that don't return anything
// mentioning void is optional in TypeScript

/*
function show():void
{
    console.log("Welcome");
}

show();
*/

/* function sum(x:number, y:number):number
{
    return (x+y);
}

let res:number=sum(10,20);

console.log(res) */