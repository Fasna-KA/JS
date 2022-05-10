console.log("working");

// let STR="abcadeecfb";

// let N=STR.length;

// function remove(STR,N) {
//   let  index=0;
//   for (var i=0;i<N;i++) {
//       var j;
//       for (var j=0;j<i;j++) {
// if (STR[i]=== STR[j]){
//     break;
// }
//   }
//   if (j===i){
//       STR[index++]=STR[i];
//   }
//   return STR.join("").slice(STR,index)
// }
// }
// let STR="abcadeecfb".split("");

// console.log(remove(STR,N));

//1.
let r = "abcadeecfb";
let rest = r.split('').filter((item, pos ,self)=> {
    return self.indexOf(item) ==  pos;
}).join('');
console.log(rest);

//or
let set = new Set();
set.add("a");
set.add("b");
set.add("c");
set.add("a");
set.add("d");
set.add("e");
set.add("e");
set.add("c");
set.add("b");
set.add("f");


console.log(set)
//{'a', 'b', 'c', 'd', 'e', 'f'}
//set has only unique value,no repeats of value

//2.
uniqueCount = ["a","b","c","a","d","e","e","c","f","b"];
var count = {};
uniqueCount.forEach(function(x) { count[x] = (count[x]||0) + 1;});
console.log(count);
//{a: 2, b: 2, c: 2, d: 1, e: 2,f: 1 }

//or

var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)//get d nd elemnt is not =to ,go inside
{
  document.write( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);
