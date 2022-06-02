
//1.What is callback hell

//each callback takes arguments that have been obtained as a result of previous callbacks. 
//This kind of callback structure leads to lesser code readability and maintainability.
// We can avoid the callback hell with the help of Promises. Promises in javascript are a way to handle asynchronous operations in Node.
//Callback hell (also a pyramid of doom or boomerang effect) arises when you nest too many callback functions inside a callback function. 

function getEmployeeID1() {

    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            };
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

            setTimeout(() => {
                employeeDetails.gender = "Male",
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000);
}
getEmployeeID1()

//------------------------------------------------------------------------------------------------------------------------

//2.What are promises and why do we need them?

//callbacks can create callback hell leading to unmanageable code. Also it is not easy for any user to handle multiple callbacks at the same time.so we use Promise

//Use:-
//Promises are used to handle asynchronous operations. 
//They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
//They are easy to manage when dealing with multiple asynchronous operations thus avoiding the undesired callback hell situation

//Syntax
const promise = new Promise(function (resolve, reject) {
    // promise description
  });
  promise.then((result) => {
    //console.log(result);
});

//3 states:-
//Pending: This is an initial state of the Promise before an operation begins
//Fulfilled: This state indicates that the specified operation was completed.
//Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.

//------------------------------------------------------------------------------------------------------------------------

//3.What is promise chaining

//The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. 
// Sometimes, you want to execute two or more related asynchronous operations,
// where the next operation starts with the result from the previous step this can be done using promise chaining
//this can be done by calling the .then() method multiple in a single promise

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});

//  we want to form multiple handlers for a promise but this is not a promise chaining
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p2.then((result) => {
    console.log(result); // 10
    return result * 2;
})

p2.then((result) => {
    console.log(result); // 10
    return result * 3;
})

p2.then((result) => {
    console.log(result); // 10
    return result * 4;
});


//------------------------------------------------------------------------------------------------------------------------

//4.What is the purpose of async/await keywords?

//An async function is a function declared with the async keyword, and the await keyword is permitted within it.
//The word “async” before a function means one simple thing: a function always returns a promise
//The keyword "await" makes JavaScript wait until that promise settles and returns its result

// Use of async await JavaScript:-
//“async” keyword needs to be updated in front of functions that contain ”await” keyword to notify that the result might be available after a certain delay since we are explicitly making the main thread wait until the promise has been resolved
//They are used to handle Promises more effectively
//They can also used for makig API calls

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

//------------------------------------------------------------------------------------------------------------------------

//5.What is hoisting?

//Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.
//*Note - Variable initializations are not hoisted, only variable declarations are hoisted

//In JS each and every variable declared using either var, let or const gets some memory space. 
//If variable is declared using var then it will get memory space in global scope. So if you will try to access the variable in this case before initialising it then it will return “undefined”.
//If variable is declared using either let or const then it will get memory space in separate scope not in global scope.
// So if you will try to access the variable in this case before initialising it then it will return Reference error saying you cannot access the variable before initialization.
//Let and const stay in TDZ-Temperal Dead Zone

//Function are hoisted,They can be called before declaration
message("Good morning"); //Good morning

function message(name) {
  console.log(name);
}
 
//------------------------------------------------------------------------------------------------------------------------

//6.What is the DOM?

//Document Object Model (DOM) 
//It is the data representation of the objects that comprise the structure and content of a document on the web.
//It represents the page so that programs can change the document structure, style, and content. 
//The DOM represents the document as objects. That way, languages like Javascript can connect to the page.

// HTML is used to structure the web pages and Javascript is used to add behavior to our web pages.
// When an HTML file is loaded into the browser, the javascript  can not understand the HTML document directly. 
//So, a corresponding document is created(DOM)(Documentary Object Model)
// DOM is basically the representation of the same HTML document but in a different format with the use of objects. 
// Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>) in HTML document but can understand object h1 in DOM.
// Now, Javascript can access  each of the objects (h1, p, etc) by using different functions.

//------------------------------------------------------------------------------------------------------------------------

//7.Difference between undefined vs not defined vs NaN

//undefined:-
//These variables declared in the program but have not assigned any value
//If you try to read the value of an undefined variable, an undefined value is returned.

//not defined: varibale which is not present in either global or local scope.

//NaN() function:- is used to determine whether a value is an illegal number (Not-a-Number) or not. 
//i.e, This function returns true if the value equates to NaN. Otherwise it returns false.
isNaN("Hello"); //true
isNaN("100"); //false

//------------------------------------------------------------------------------------------------------------------------

//8.How many operators do we have in JS ?

//Arithmetic Operators -- %,- , +,/, * 

//Comparison Operators --==, ===, !=, !==, >, <, >=, <=

// equal to operator
console.log(n == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

// not equal operator
console.log(m != 2); // true
console.log(b != 'Hello'); // 

const aa = 2;

// strict equal operator
console.log(aa === 2); // true
console.log(aa === '2'); // false

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true

// greater than operator
console.log(a > 2); // true

// greater than or equal operator
console.log(a >= 3); //true

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true

// less than or equal operator
console.log(a <= 3) // true
console.log(a <= 2); // true

//Bitwise Operators :-

//Bitwise And - a&b
// logical AND
console.log(a && a); // true
console.log(a && b);  // false

console.log((c > 2) && (c < 2)); // false

//Bitwise OR - a|b
// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true

//Bitwise XOR - a^b

//Bitwise NOT - ~a
// logical NOT
console.log(!a); // false
console.log(!b); // true

//Increment,Decrement Operators :-
//Postfix increment - a++
//Prefix increment - ++a

//Postfix decrement - a--
//Prefix decrement - --a


//Logical Operators -- &&, ||, !

//Ternary Operators -- Condition ? Val1 : val2

//Comma Operator -- ,

//------------------------------------------------------------------------------------------------------------------------

//9.What are pure functions?

// A pure function is a function which:

// Given the same input, always returns the same output.
// Produces no side effects.
// It depends only on its own arguments.
// It wont try to change variables out of its scope.


// Pure functions are completely independent of outside state
function pure(val) {
    return val * 2;
 }
 pure(2)
 pure(2)

//------------------------------------------------------------------------------------------------------------------------

//10.What are arrow functions?

// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:
// An arrow function expression  is an  alternative to a traditional function expression
// its compact too

// disadvantage:
// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// Arrow functions don't have access to the new.target keyword.
// Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions cannot use yield, within its body.

const a = (b) => {
    console.log("Hi",b);
}

//------------------------------------------------------------------------------------------------------------------------

//11.Give an example of async/await

const printVowels = (time,value) => {
    return new Promise(resolve => {
      setTimeout(() => {
          console.log(value);
        resolve();
      }, 2000);
    });
  }
  
  async function print() {
      await printVowels(2000,"A")
      await printVowels(1000,"E")

  }
  print()

