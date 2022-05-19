//1.
function althaf(){
    console.log("IAM ALTHAF K A");
}
althaf()

//2.
function sum(a,b) {
    const res=a+b;
    const res1="sum of "+a+","+b+" is "+res;
    console.log(res1 );
}
sum(3,4)

//3.Arrow ftn
const multiply=(a,b) => {
    const res2=a*b;
    console.log(res2);
}
multiply(2,3)

//4.
var x = 21;
 var girl = function () {
     console.log(x);
     var x = 20;
 };
 girl ();//undefined

//5.
var x = 21;//hoisting 
 girl ();
 console.log(x)
 function girl() {
     console.log(x);
     var x = 20;
 };//21

 //6.//"a is not defined"
//  var x = 21;
//  a();
//  b();
//  console.log(a);
//  a = function() {
     
//     x = 20;
//    console.log(x);
//  };
//  b = function() {
     
//     x = 40;
//    console.log(x);
// };//"a is not defined"

//7.
function factorial(n) {

let f = 1;
for(let i=1;i<=n;i++)
{
    f=f*i;
}
console.log(f);
}
factorial(6)//720
