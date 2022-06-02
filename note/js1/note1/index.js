
//1.Difference b/n "==" and "===" operator

//The equality operators (==)
//==--- it compare the value of 2 variables,not data type
//The equality operator (==) checks whether its two operands are equal, returning a Boolean result.
//Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

console.log(2==2);//true

//strict equality (===) operator
//===- it compares the value and data type of 2 variables
//strict equality operator always considers operands of different types to be different.
//Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

console.log("Hi"==="Hi");//true

//2.what is spread operator?
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
//The spread operator is often used in combination with destructuring.
//We can use the spread operator with objects
//... allows us to expand an iterable like array into its individual elements
let name =['A', 'L', 'T', 'H', 'A', 'F']
let spread = [...name]
console.log(spread);

//3.Difference between var let and const
// Var declaration are globally scoped or ftn scoped,while let and const are block scoped
// Var variables can be updated & redeclared with in its scope
// Let variables can be updated,but not redeclared 
// Const variables can neither be updated nor redeclared
// Var are hoisted
// While var and let can be declared without being initialised,const must be initialized during declaration

//4.What is execution context
//In  the first stage "Memory Allocation",all the variables will get memory but will not the initialized means their value will not be given and it will be undefined,
//but function will get their value or definition at the time of memory allocation only.
//In the second stage "Code Execution",variables will get assigned with their true values and functions will be executed
//After completion of FEC,it will get deleted, 
//and after if all executn completed GEC also get deleted

//5.What is meant by First class functions

//n Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.
//Function which gets treated as a variable.It can be passed as an argument to other functions,can be returned by another function and can be assigned as a value to a variable.
//Always we use arrow ftn

//FCF-First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
//HOF-Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
const foo = function(p) {//HOF
  console.log("Hello World");//Hello World
  p()//must
}
function boo() {//FCF
  console.log("iam AZHAR BUHAIS");//iam AZHAR BUHAIS
}
foo(boo); 


//6.what are closures?

//A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables.
//Closures: When a fun is running , there is a another variable , we may access the local variable .........
//It is a combination of inner function and outer
//the lexical environment that was created by the inner function.
//We are able to access the variable inside the function becoz of closures.

function outer(){
  let a =10;
  function inner() {
     console.log(a);
  }
  inner();
}
outer();








