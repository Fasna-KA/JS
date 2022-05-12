console.log("works");

//div
let element=document.createElement("div");
element.className="test1";
element.innerHTML=`<b>MULTIVERSE OF MADNESS</b>`;

document.querySelector("div#test").appendChild(element)

const image=document.createElement("img");
image.className="test2";
image.setAttribute("src","./DS.jpg");

document.querySelector("div#test").appendChild(image);

//--------------------------------------------------------------

a();//support hoisting
function a() {
    console.log("FASNA");
}


//Anonymous ftn
//wont support hoisting!
// b();---b is not a function
var b= function () {
    console.log("AZHAR");
}
console.log(b);

b();//output ll come
//ftn exprssn is a unnamed ftn asiigned to variable,the variable recieves the ftn definitn,which in turn can call the ftn by calling the variable name

{
    const d=function () {
        console.log("HI ");
    }
    d();//output ll come
}
//d();----output wont come,d is not a ftn
//the ftn can only be called inside the scope and not outside the scope

//First class fuction(FCF)----The ftn can be passed as values into another ftn or can be returned from another ftn as values.This unique feature makes them call as First class fuction/Firstclass Citizen

//First Class Functions - The functions can be passed as values into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.


//Arrow ftn/Declared in ES6(2015)
const f = () => {
    console.log("PEACE");
}
f();


//Higher Order Function(HOF) - The function which accept the FCF's or return them are called as Higher Order Functions

//FCF

let g= function (param) { //HOF
    console.log("Iam FASNA");
    console.log(param);
    param();//call back ftn
}

function h() { //FCF
    console.log("Iam AZHAR");
}

g(h);//h is a function passed as an argument

let i = function () {
    return function j() {
        console.log("Iam ALTHAF");
    }
}
let returnVal =i();
console.log(returnVal);

// console.log(i());

//ƒ j() {
//    console.log("Iam ALTHAF");
// }


//setTimeout--it's call back ftn
setTimeout(()=>{
    console.log("ASLAM");
},2000);
//ASLAM ll print aftr 2s

const sayHi = (nameofFriend) => {
    console.log("Hello",nameofFriend);

}
const greeting =(friend,callBackFunction) =>{
    callBackFunction(friend);
}

greeting("Bala",sayHi);

//First Class Functions(FCF) - The functions can be passed as values(as arguments) into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.


//Higher Order functions(HOF) - The functions which accept the FCF's or return them are called as Higher Order Functions

// let g = function(param){//HOF
//     console.log("I am fn G"); 
//     console.log(param); 
//     param();//callback function   
// }

// // function h(){//FCF
// //     console.log("I am fn h");
// // }

// // g(h);//h is a function passed as an argument


// // let param = function(){
// //     console.log("i am fn H");
// // }

// let i = function(){//HOF
//     return function j(){//FCF
//         console.log("I am fn J");
//     }
// }
// let returnVal = i();
// console.log(returnVal);
// console.log(i());

// setTimeout(() => {
//     console.log("Hi I am inside a callback function");
// }, 4000);






