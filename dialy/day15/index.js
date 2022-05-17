const StudentPrototype1 = {
    calcAge(){
        console.log(2022- this.bYear);
    }
}


const azhar = Object.create(StudentPrototype1);

azhar.fname = "AZHAR";
azhar.lname = "BUHAIS";
azhar.bYear = 1998;

azhar.calcAge();//24

console.log(azhar);//{fname: 'AZHAR', lname: 'BUHAIS', bYear: 1998}


//initialising mthd
const StudentPrototype = {
    calcAge(){
        console.log(2022- this.bYear);
    },initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const Althaf= Object.create(StudentPrototype);
console.log(Althaf);//{}

Althaf.initialise("ALTHAF","AZEEZ",1997);
Althaf.calcAge();//25

console.log(Althaf);//{fname: 'AZHAR', lname: 'BUHAIS', bYear: 1998}

console.log(Althaf.__proto__);//{calcAge: ƒ, initialise: ƒ}

//------------------------------------------

//Classes
//Classes in js doent wrk exactly the same way as that of class in java/c++
//They are just the syntactic sugar to Object prototype,instances that we have read.
//They are special kind of functions with some variations

//1. Classes are also First Class Functions
//2. Classes are not hoisted/donot support hoisting.

const ClassPrototype = class{
    constructor(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
  
    }
    calcAge(){
        console.log(2022- this.bYear);//23
    }

}

const hanana = new ClassPrototype("HANANA","FOUSIYA",1999);
console.log(hanana);//ClassPrototype {fname: 'HANANA', lname: 'FOUSIYA', bYear: 1999}
hanana.calcAge();

console.log(hanana.__proto__);//{constructor: ƒ, calcAge: ƒ}
console.log(hanana.__proto__.__proto__);//object

ClassPrototype.prototype.greet = function(){
    console.log("Hi Iam PAZ");//Hi Iam PAZ
}

hanana.greet();//we clld or assigned
console.log(hanana.__proto__);//{greet: ƒ, constructor: ƒ, calcAge: ƒ}


//Classes - 

// Classes in JS doesnot work exactly the same way as that of Classes in Java/C++
//They are just a syntactic sugar to Object prototype, instances that we have read.
//They are special kind of functions with some variations .

//1. Classes are also First Class FUnctions
//2. Classes are not hoisted/ donot support hoisting.
//


const ClassPrototype1 = class{
    constructor(fname, lname, bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
    calcAge(){
        console.log(2022 - this.bYear);
    }
}


const jarvis = new ClassPrototype1("Jarvis","Valley",1992);
console.log(jarvis);
jarvis.calcAge();

console.log(jarvis.__proto__);

ClassPrototype1.prototype.greet = function(){
    console.log("Hi I am someone");
}

jarvis.greet();
console.log(jarvis.__proto__);



//-------------------------------------------------------
//Typecasting

console.log("22" + 22);//2222
console.log("HI" + 22);//HI22
//+ number will converted to string used to concating


console.log("22" - 22);//0
//- not work

console.log("22" + 22);
console.log("Hi" + 22);

console.log(2022 - "1980");
console.log(2022 / "2");
console.log(2022 * "2");
console.log(2022 % "2");

console.log(2 ^ "2");//power is nottypecasting a string to a number like that of a subtraction, division, multiplication, modulus



