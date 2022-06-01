//1.Explain call(), apply() and, bind() methods.with example

//these are diff ways of invoking or calling ftn
//when you are calling ftn using any of these 3,then you dont have to define in the function,that it will be taking object as a parameter
//It will assume that the first argument which is coming while calling the function will be an object only


//call() invokes the function and allows you to pass in argument one by one
//apply() invokes the function and allows you to pass in argument as array
//Apply() : each and every arguments which is required to be passed to the function will be inside an array.
//displayUserDetails.apply(user, ["TCS", "developer"]).

var person={
    fname:"AZHAR",
    lname:"Buhais"
}
var person1={
    fname:"FASNA",
    lname:"Azeez"
}

function extra(obj) {
    console.log("Iam person",obj);
    console.log("My name is "+ obj.fname + ""+ obj.lname);
}
//invoking / calling the ftn and passing the object

extra(person)
extra(person1)

//now in place of object,we use "this"
function extra() {//we dnt need to give ths as parameter
    console.log("Iam person",this);
    console.log("My name is "+ this.fname + ""+ this.lname);
}

extra.call(person)
extra.apply(person1)
//Bind()
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.
var person1 = {firstName: 'Prepbytes', lastName: 'Students'};
function test(greeting, year) {
console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + ' ' + year);
}
var user = test.bind(person1);
user("Hello",2021)             // Hello  Prepbytes Students 2021

//this keyword will apply when call and apply ,we can use whenevr expecting argument ,object wants to come as output then we will use



//2.Explain Prototype
//Prototypes are the mechanism by which Javascript objects inherit features from one another.
//__proto__ object will be created inside the object which will refer to the Prototype of its class constructor or function constructor whenever an object will be created.
//Using prototype property we can also add more elements to an object which will be accessible by other objects also(the objects which will be created by same function or class constructor).

//3.What are function constructors?
//FC are use for creating objects in js
//we can call the constructor directly using "new" keyword
//Constructor name should starts with capital letter
//When we call constructor it will create an object
//dont have return statement 
//can add properties using prototype
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
//4.Give an example of inheritance using function constructor

function Employe(name,age) {
    this.name = name;
    this.age = age;
    this.salary = 100000
    
}
let employ1= new Employe("Althaf",24);//Employe {name: 'Safna', age: 20, salary: 100000}
console.log( new Employe("Safna",20));
console.log(employ1);//Employe {name: 'Althaf', age: 24, salary: 100000}

//in case,if you want to add other properties in the object created using function constructor
employ1.salary = 200000
console.log(employ1);//Employe {name: 'Althaf', age: 24, salary: 200000}

//in case you want to add some other properties,inside this fuction constructor
Employe.prototype.company="Prepbytes"
employ1.company="data entry"
console.log(employ1.company);

//5.prototype chaining
//employ1 , employ 2 ...are the object get created using function constructor,Employe--parent
console.log(employ1.__proto__);//Employe
console.log(employ1.__proto__.__proto__);//Object
console.log(employ1.__proto__.__proto__.__proto__);//null
//each object.array ... always have the prototype property from which we can access all the inbulit function

//In case of employ1 --its prototype level is Employe Function constructor,prototype level 2 is object constructor 

//6.Callback function
//Function passed to another function as argument

function outer() {
    console.log("Outer");
}
function inner() {
    console.log("Inner");
}
outer()//Outer
inner()//Inner
outer(inner)//Outer  //it is same as outer(),so only A
outer(inner())//Outer  //we get both

//7.what is the use of settimeout
//After certain time,it will return or print result
//It is WEB API
setTimeout(() => {
    console.log("have a nice day");
}, 2000);

//Print vowels
function printVowels() {
    setTimeout(() => {
        console.log("A");
    }, 2000);
    setTimeout(() => {
        console.log("E");
    }, 5000);
    setTimeout(() => {
        console.log("I");
    }, 1000);
    setTimeout(() => {
        console.log("O");
    }, 1000);
    setTimeout(() => {
        console.log("U");
    }, 0);
}
printVowels()
//U I O A E

//8.What is an event loop and call stack
//The event loop has one simple job : to monitor the call stack and callback queue.
// If the call stack is empty, the event loop will take the first item from the callback queue and will push it to call stack, which will effectively runs it

//A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function
//The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now.

//9.What is creation phase and execution phase?

//In the first stage “Memory allocation”, all the variables will get memory but will not be initialized means their value will not be given and it will be undefined,
// but functions will get their value or definition at the time of memory allocation only.

//In the second stage “Code Execution”, variables will get assigned with their true values and functions will be executed.

//After FEP is completed,it got deleted from call stack
//If all the execution completed,all get deleted from call stack

//10.What are objects in javascript?

//An object is a collection of related data and/or functionality
//(which usually consists of several variables and functions —
// which are called properties and methods when they are inside objects.)
    
var user= {
    name: "Rahul",
    profession: "Teacher",
    hobbies: ["Reading", "Dancing"],
    bio: function() {
        console.log(`Hi! I am ${name}, my profession is
       ${profession}`)
    }

}

//How to access object keys or attributes

user.name //gives “Rahul”
user.profession //gives “Teacher”

//11.What is callback hell

//each callback takes arguments that have been obtained as a result of previous callbacks. This kind of callback structure leads to lesser code readability and maintainability.
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


