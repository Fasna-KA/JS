// console.log(myage);
// // not defined, undefined, null
// //not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// // console.log(myAge);//not defined

// // undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
// let myHobbies;
// console.log(myHobbies);
// myHobbies = "Skating";
// console.log(myHobbies);

// // null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

// let amIadult = null;
// console.log(amIadult)//null
// amIadult = true;
// console.log(amIadult)//true


// // Global scope and Block/local scope
// let fname="Fasna";
// const lname="Azhar";
// var age="22";
// console.log(fname)





// Hoisting-its only supported with that of var keywords and with the function .Let and const keywords donot support hoisting
console.log(game); //undefined
var game;
game="cricket";
console.log(game); //cricket

//For var keyword variables,if we try to access them before assigning values to the will give us undefined but the moment we declare a value to it ,it ll give us the assigned value


//Hoisting in functions
add(3,2);
function add(a,b){
    let result=a+b;
    console.log(result);
}

//Arithemic operators
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);//0.66666666
console.log(2%3);//2

//Comparison operators
console.log(2<3);//true
console.log(2>3);//false
console.log(2>=3);//false
console.log(2<=3);//true

console.log(2==2);//true
console.log(2===3);//
console.log(2=="2");//true


//Logical operators

console.log(2!=6);//true
console.log(2!=2);//false
console.log(2!==2);//false

//OR
console.log(2||5);//2
console.log(0||0);//0
console.log(0||3);//3
//AND
console.log(1&&3);//3
console.log(1&&0);//0

console.log(!0);//true
console.log(!3);//false
console.log(!4);//false


//increment decrement operation

let a=1;
a++;
console.log(a);
a--;



console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line









