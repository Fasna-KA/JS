//1.What is a Temporal Dead Zone?

//TDZ is: the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.
//The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.
//Before ES6 there was no other way to declare variables other than var. But ES6 brought us let and const.
//let and const declarations are both block-scoped, which means they are only accessible within the { } surrounding them. 
//var, on the other hand, doesn't have this restriction.

function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
  }
// You can see above that if I accessed the age variable earlier than its declaration, it would throw 
//  a ReferenceError. Because of the TDZ.
// But var won't do that. var is just default initialized to undefined unlike the other declaration.

//--------------------------------------------------------------------------------------------------------------------------------------

//2.What is the for-in loop in JavaScript? Give its syntax

//for in (array):-
//We can use iteration with a for loop to visit each element of an array.
// This is called traversing the array. Just start the index at 0 and loop while the index is less than the length of the array.


// // define array
const array = [ 1,2,3,4,5 ];

for (let x in array) {
    console.log(x);
}


//for in (object):-
//key(). It returns the values of all properties in the object as an array. 
//You can then loop through the values array by using any of the array looping methods.

const name = {
    name:"AZHAR",
  id: 9,
  clg: "ICET"
}

for ( let key in name ) {
 console.log(name[key]);
}


//--------------------------------------------------------------------------------------------------------------------------------------

//3.Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

//JavaScript has 3 types of scope:
//Block scope.
//Function scope.
//Global scope.

//Local scope:

//Variables declared within a JavaScript function, become LOCAL to the function.
//  a local scope is the opposite of the global scope .here the variable can only be access within a given scope 
//  but can still be accessible for the other scope which are being nested within that parent  scope 

//  Since local variables are only recognized inside their functions, variables with the same name can be used in different scope
//  Local variables are created when a scope starts, and deleted when the scope is completed.
//  local scope can further be divided into block and functional scope

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

//Local variables have Function Scope:
//They can only be accessed from within the function. 

// Block Scope:

//Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//ES6 introduced two important new JavaScript keywords: let and const.
//These two keywords provide Block Scope in JavaScript.
//Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
  }
  // x can NOT be used here

//Variables declared with the var keyword can NOT have block scope.
//Variables declared inside a { } block can be accessed from outside the block.
{
    var x = 2;
  }
  // x CAN be used here

// Functional scope:

//JavaScript has function scope: Each function creates a new scope.
//Variables defined inside a function are not accessible (visible) from outside the function.
//Variables declared with var, let and const are quite similar when declared inside a function.
//They all have Function Scope:
//  A function scoped variable means that the variable defined within a function will not accessible from outside the function.

function myFunction() {
    const carName = "Volvo";   // Function Scope
  }
  
function scope(){
    let r = "local"// local or function  scope variable
    if("a"==="a"){
        let d = "block"// block scope variable
        console.log(d)// op
        console.log(r)//op
    }
    console.log(d)//error
    if("d"==="d"){
        console.log(d);//error
    }
}

//Global scope

// A variable declared outside a function, becomes GLOBAL.
//Variables declared Globally (outside any function) have Global Scope.
//Global variables can be accessed from anywhere in a JavaScript program.
//Variables declared with var, let and const are quite similar when declared outside a block.

const x = 2;       // Global scope

//Scope chain

//Scope chains establish the scope for a given function.
// Each function defined has its own nested scope, and any function defined within another function has a local scope which is linked to the outer function
// — this link is called the chain. // function linked to parent() thats why name is accessible.

//--------------------------------------------------------------------------------------------------------------------------------------

//4.What is difference between null and undefined and where to use what?

//Null:-
// null is a data type which can be use to implement or initialized a variable
// null can also be written as "",''
// let null = null;
console.log(null);// op null

//Undefined:-
//It is a datatype in JS
// undefine is  when a variable is define but not initialized or we have assign value to a variable then we get undefine
var value;
console.log(value); //undefine

null === null //true
undefined === undefined //true
null === undefined //false


//--------------------------------------------------------------------------------------------------------------------------------------

//5.What is Symbol?

//Its a Primitive datatype
//Symbol — that's guaranteed to be unique.
//Every Symbol() call is guaranteed to return a unique Symbol.

let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
//The above code creates three new Symbols. Note that Symbol("foo") does not coerce the string "foo" into a Symbol. It creates a new Symbol each time:
Symbol('foo') === Symbol('foo')  // false


//--------------------------------------------------------------------------------------------------------------------------------------

//6.Write code to explain map and filter in arrays

//Map():-
//  Map creates a new array by transforming every element in an array individually.
//  The map() method is used for creating a new array from an existing one, applying a function to each one of
//  the elements of the first array.


let arra = [1,2,3,4,5]
let ser = arra.map(x => x*2);
console.log(ser);//multiply all element by 2


// Filter():-
// Filter creates a new array by removing elements that don't belong.
// method takes each element in an array and it applies a conditional statement against it. 
// If this conditional returns true, the element gets pushed to the output array. If the condition returns false,
// The element does not get pushed to the output array.

let sew = arra.filter(x => x>3);
console.log(sew);

//--------------------------------------------------------------------------------------------------------------------------------------

//7.Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
let person = {
    fname: "Althaf",
    id:[1,2,3,4]
}
let person2 = {
    sname: "Azeez",
    id2: [1,2,3,4]
}

function check() {
    arr1 = person.id
    arr2 = person2.id2
    if(arr1.length===arr2.length){
    let a = 0;
    for(i=0; i<person.id.length; i++){
        for(j=0; j<person.id.length; j++){
            if(arr1[i]===arr2[j]){
                a++;
            }
        }
  
  
    }
if(arr1.length===a){
    console.log("same")
}else{
    console.log("different")
}
}
else{
    console.log("different")
}
}

check();

//--------------------------------------------------------------------------------------------------------------------------------------

//8.Please explain Self Invoking Function and its code

//A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition.
//It is also used to avoid polluting global namespace
(()=>{
    const girl = "Fasna"
})()
const girl = "Fasna" //we can use the same outside too


//The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis,which does the execution
// it is independable
// The self-invoking function in JavaScript are known as Immediately Invoked Function Expressions (IIFE).


(function () {
    let x = "selfinvoking function";  
    console.log(x)
  })();

//--------------------------------------------------------------------------------------------------------------------------------------
