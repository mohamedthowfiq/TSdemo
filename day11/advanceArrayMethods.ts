/* ========== forEach(), map(), filter(), reduce(), some(), every() ==========

   1. forEach() - Executes a function once for each array element
   It takes a function as a parameter

   Syntax: array.forEach(function(currentValue, index, array){})

   currentValue - The current element being processed in the array
   index (optional) - The index of the current element being processed in the array
   array (optional) - The array the current element belongs to. */

// Ex1: Get index of all the fruits along with value.

/* let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

function getFruitsIndex(fruit: string, index: number) {
    console.log(`Index of ${fruit} is ${index}`);
}

fruits.forEach(getFruitsIndex); */


/* let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

fruits.forEach(function(element, index) {
    console.log(`Index of ${element} is ${index}`);
}); */

//using arrowfunction
/* let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

fruits.forEach(
    (element, index) => {
        console.log(`Index of ${element} is ${index}`);
    }
); */

// Ex2: Convert all the fruits to uppercase using forEach()

/* let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

fruits.forEach((element)=>{
    console.log(element.toUpperCase());
}) */


// 2. map() - Creates a new array populated with the results of calling the function on every element an array
// It takes a function as a parameter
// Returns the same number of elements that we have in original array

// Syntax: array.map(function(currentValue, index, array){})


//  Ex1: Get the square of all the numbers in an array.Ex [1,2,3] then result should be [1,4,9]

/* let og:number[]=[1,2,3]
let result = og.map((element)=>{
    return element * element;;
});

console.log(result); // [1, 4, 9] */

//  Ex2: Double each number [1,2,3] then result should be [2,4,6]

/* let og:number[]=[1,2,3]
let result = og.map((element)=>{
    return element + element;;
});

console.log(result); // [2, 4, 6] */


/* let og:number[]=[1,2,3]
let result = og.map((element)=> element*2); 
console.log(result); // [2, 4, 6] */
/*  if you have single return statement inside the array 
 function then {} and 'return' statement are optional */

//###################################################################################################

// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It takes a function as a parameter
// Returns either same or fewer number of elements compared to original array

// Syntax: array.filter(function(currentValue, index, array){})

// EX1: Get the only even numbers from an array

//let numbers:number[]=[1,2,3,4,5,6,7,8,9,10]

/* let filtered = numbers.filter((element)=>{
    if (element%2==0){
        return element 
    }
})

console.log(filtered) */

/* let filtered = numbers.filter((element)=>(element%2==0))
console.log(filtered) */ 

//################################################################################################

// 4. reduce( - Applies a functoin on every element of an array and returns a single value)

// Syntax : array.reduce(function(accumulator, currentValue, index,array){})

// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed

// Ex1 Get the total(Sum) of all the elements in an array

/* let numbers:number[]=[1,2,3,4,5]

let result = numbers.reduce((total ,element)=> total+element,0)     
// Here 0 is default value of accumlator, putting a 0 is optional but if another number means ,need to mention here
console.log(result) */

// ###################################################################################################################

// 5. some() Checks if any element satisfies a condition
// Returns true if at lease one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})

// Ex1. Check array contains negative values

/* let numbers:number[] = [1,2,3,4,5]

let hasNegative = numbers.some((element)=>element<0)
console.log("Does array contains negatives ? ", hasNegative) */

// ###################################################################################################################

// 6. every() Checks if aall element satisfies a condition
// Returns true if allelement passes the condition, else false 

// Syntax:  array.every(function(currentValue, index,array){})

//Ex1:
let numbers:number[] = [2,4,6,8,10]
let allEven = numbers.every((element)=>element%2==0)
console.log(allEven)