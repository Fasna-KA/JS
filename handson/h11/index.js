//1
const Parent ={
    fname:"PAZNA",
    age:22,
    relation:"bf",
    show:function(msg){
        console.log("hi",msg);

    }

}
let child={
    fname:"BICHU"
}
child.__proto__=Parent;
console.log(child.relation);
Parent.show.call(child,"hey")//call can use only in ftn 


// const Parent={
//     initialise(fname,lname,age){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//     }
// }
// const pas= Object.create(Parent);
// pas.initialise("PAZNA","BICHU",22)
// console.log(pas);

2.
console.log(child.__proto__)//Parent prototype
console.log(child.__proto__.__proto__)//object
console.log(child.__proto__.__proto__.__proto__)//null

//3.
array=[1,2,3,4,5]
let add=array.reduce((add,cur)=>add+=cur,0)
console.log(add);


//4.
function bichu(){
    console.log(Object.keys(child));
}
bichu()

