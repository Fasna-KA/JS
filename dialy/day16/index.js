const StudentPrototype = {
    calcAge(){
        console.log(2022-this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname=fname;
        this.lname=lname;
        this.bYear=bYear;

    }
}
const honey = Object.create(StudentPrototype);
console.log(honey);
honey.initialise("Honey","Tambi",1995);
console.log(honey);
honey.calcAge();

const PersonPrototype = Object.create(StudentPrototype);
console.log(PersonPrototype);

PersonPrototype.initialiseOne = function(fname,lname,bYear,course){
    StudentPrototype.initialise.call(this,fname,lname,bYear);
    this.course = course;
    // this.fname=fname;
    //this.lname=lname;
    //this.bYear=bYear;
}

PersonPrototype.introduce = function(){
    console.log(`My name is ${this.fname} ${this.lname} and my course is ${this.course}`);
}

const jay = Object.create(PersonPrototype);
console.log(jay);
jay.initialiseOne("JAY","DUBEY",1986,"CSE");
console.log(jay);
jay.calcAge();
jay.introduce();

console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__.__proto__);

//CLOSURE
//Closure - Closure is not something that we create manually or explicitly.It happens automatically in certain situations which we need to recognize.
//Closure makes a function remember all the variables that existed at the functions birthplace initially. 
//Any function always has access to the variables environment of the execution context in which the ftn was created

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger Count is ${passengerCount}`);
    }
}//no output--not called ftn

const bookie = ticketBooking();
// console.log(bookie);
bookie();
bookie();
bookie();
console.dir(bookie);//to see closure

//In Closure even though the execution context is destroyed, the variable environment somehow keeps living somewhere in the engine.


let f;
const g = function(){
    const a=23;

    f= function(){
        console.log(a*2);//46
    };
};

const h = function(){
    const b=25;

    f= function(){
        console.log(b*2);//50
    };
};


g();
f();

h();
f();

console.dir(f)//Closure (g) {a: 23}
console.dir(f)//closure h


bookie();
console.dir(bookie);//to see closure







