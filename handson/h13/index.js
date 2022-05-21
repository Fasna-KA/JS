 //1.

 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());//pop message " This page says 1"
alert(counter());//pop message " This page says 2"
alert(counter());//pop message " This page says 3"
alert(counter());//pop message " This page says 4"

// pop up will appear in page,"This page says 1",and it continues for numbr 4

//2.
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?--1
//   }
//   console.log(count); // What is logged?--0
// })();

// //3.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?--1
  }
  console.log(count); // What is logged?--0
})();

//4.
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?-- log is going to be 1,2,3 but each value get updated after 1s hence o/p is 3
    }, 1000);
  }

// 5. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function outer(l){
  function inner(b) {
     console.log(l*b);//6
  }
  inner(3);
}
outer(2);

//6. Take a variable in outer function and create an inner function to increase the counter every time it is called


function outer1(){
  let f=0
  return function (){
    count++
  console.log(f);
}
  }
let res=outer1();
res()//0
res()//0
res()//0

//7.
var a = 12;
(function () {
  alert(a);
})();// alert "this page say 12"

//8.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();// here alert will be of the value 12

//9.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = "+ outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar)  
    })(456);
})(123);
//outerArg = 123
//innerArg = 456
//outerVar = a
//innerVar = b
//globalVar = xyz


