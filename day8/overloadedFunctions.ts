// step 1: write a signature of function
// step 2: implement the function
// step 3: calling function

// example 1:   Different paramter Types(data types)

/* function getInfo(id:number):string;
function getInfo(name:string):string;


function getInfo(value:number|string):string
{
    if(typeof value === "number")
    {
        return `ID: ${value}`;
    }
    else
    {
        return `Name: ${value}`;
    }
}

console.log(getInfo(101)); // ID: 101
console.log(getInfo("John")); // Name: John */


// Example 2: Different number of parameters

/* function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

function add(a:number, b:number, c?:number):number
{
    if(c !== undefined)
    {
        return a + b + c;
    }
    return a + b;
}

console.log(add(5, 10)); // 15
console.log(add(5, 10, 15)); // 30 */

// Example 3: Different return types

/* function processInput(str:string):string;
function processInput(num:number):number;

function processInput(value:string|number):string|number{
    if(typeof value === "string")
    {
        return `Processed string: ${value.toUpperCase()}`;
    }
    else
    {
        return `Processed number: ${value * 2}`;
    }
}

console.log(processInput("hello")); // Processed string: HELLO
console.log(processInput(5)); // Processed number: 10 */


//Example 4:

/* function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value:string|number|boolean):string
{   
    if(typeof value === "string")
    {
        return `Hello, ${value}!`;
    }
    else if(typeof value === "number")
    {
        return `You are ${value} years old.`;
    }
    else
    {
        return `Are you married? ${value ? "Yes" : "No"}`;
    }
}

console.log(greet("John")); // Hello, John!
console.log(greet(30)); // You are 30 years old.
console.log(greet(true)); // Are you married? Yes
console.log(greet(false)); // Are you married? No */