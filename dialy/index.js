
// // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// const addition = (parameter1 , parameter2) => {
//     console.log("i am in addition function");
//     }
//     addition(argument1,argument2);
    
//     // function expression
//     const subtraction = function(){
//         console.log("i am in subtraction function")
//     }
//     subtraction(argument1 , argument2);

function SayHi() {
    console.log("Hi!!!");
    let a=3;
    let b=6;
    let result=a+b;
    console.log(result)
    
}  
SayHi();  //calling the ftn

function addition(num1,num2) {
    let result=num1+num2;
    console.log(result); 
}
addition(3,4);

function multiply(n1,n2) {
    let result=n1*n2;
    return result; //dnt print ans,jst return the result and thrown to outside
 
}
//to see result
let returnedresult=multiply(5,6);
console.log(returnedresult);

//other way
console.log(multiply(5,6));
    

//The Lexical Environment and Scope Chain

function one() {
    // console.log(i);//wont print,coz i not defined,it wont take from child
    two();
    function two() {
      let i=5;
      console.log(i);  
    }
}
one();

//Block Scope and Shadowing

let f=3;
const g=4;
var h=5;
console.log(f);//3
console.log(g);//4
console.log(h);//5
{
    let f=4;
const g=4;
var h=4;

    console.log(f);//4
    console.log(g);//4
    console.log(h);//4

}
console.log(f);//3
    console.log(g);//4
    console.log(h);//4--its becoz VAR ,it overwritten


// let m = 4;
// console.log(m);//4
// {
//     let m= 5
//     console.log(m);//5

// }
// console.log(m);//4

// const n = 4;
// console.log(n);//4
// {
//     const n= 5
//     console.log(n);//5

// }
// console.log(n);//4






