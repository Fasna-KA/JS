console.log("works");

let student={
    fname:"FASNA",
    lname:"AZHAR",
    age:22,
    
}
let student1={
    fname:"HANANA",

}
student1.__proto__=student;//student is parent
console.log(student1);
console.log(student1.lname);//AZHAR---its inheriting the lname of parent


let arr=[1,2,3,4,5]

console.log(arr.__proto__);//[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
//arr.__proto__ ==Array.prototype

console.log(Array.prototype);//[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

console.log(arr.__proto__.__proto__);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//arr.__proto__.__proto__==Object.prototype

console.log(arr.__proto__.__proto__.__proto__);//null

//in JS,everything is an OBJECT

//CALL/Apply/Bind methods
let employe1={
    fname:"JASMIN",
    designation:"HR",
    id:1, 
    showDetails:function () {
        console.log(this.fname,this.designation,this.id);//SAFNA SECURITY 2
    }   
}
let employe2={
    fname:"SAFNA",
    designation:"SECURITY",
    id:2,    
}
let employe3={
    fname:"FASNA",
    designation:"MANAGER",
    id:3,    
}

employe1.showDetails.call(employe2);//it ll show ansr in index 38
employe1.showDetails.call(employe3);

employe1.showDetails.apply(employe3);
employe1.showDetails.apply(employe3);

let res1=employe1.showDetails.bind(employe3);
let res2=employe1.showDetails.bind(employe3);
res1()
res2()




