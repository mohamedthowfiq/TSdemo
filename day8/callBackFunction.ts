//A callback function : A function passed as an argument to another function and executed later.


//Example 1:

//Function that takes callback function as an parameter
/* function greet(name:string,callback:(message:string)=>void)
{
    console.log(name);
    callback("Hello");  // executing the callback function
}

//callback function
function showMessage(message:string)
{
    console.log(message);
}

//calling the function by passing the callback function
greet("John",showMessage); */