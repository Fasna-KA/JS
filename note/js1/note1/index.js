
//1.Difference b/n "==" and "===" operator
//==--- it compare the value of 2 variables,not data type
//===- it compares the value and data type of 2 variables

console.log(2==2);//true
console.log("Hi"==="Hi");//true

//2.what is spread operator?
//... allows us to expand an iterable like array into its individual elements
let Name =['A', 'L', 'T', 'H', 'A', 'F']
let spread = [...Name]
console.log(spread);

//3.Difference between var let and const
// Var declaration are globally scoped or ftn scoped,while let and const are block scoped
// Var variables can be updated & redeclared with in its scope
// Let variables can be updated,but not redeclared 
// Const variables can neither be updated nor redeclared
// Var are hoisted
// While var and let can be declared without being initialised,const must be initialized during declaration

//4.What is execution context
//In  the first stage "Memory Allocation",all the variables will get memory but will not the initialized means their value will not be given and it will be undefined,but function will get their value or definition at the time of memory allocation only.
//In the second stage "Code Execution",variables will get assigned with their true values and functions will be executed
//After completion of FEC,it will get deleted, and after if all executn completed GEC also get deleted

//5.What is meant by First class functions
//Function which gets treated as a variable.It can be passed as an argument to other functions,can be returned by another function and can be assigned as a value to a variable.
//Always we use arrow ftn

const foo = function(p) {//HOF
          console.log("Hello World");//Hello World
          p()
}
function boo() {//FCF
  console.log("iam AZHAR BUHAIS");//iam AZHAR BUHAIS
}
foo(boo); 


//6.what are closures?
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








