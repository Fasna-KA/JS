//map,filter,reduce
//map,filter,reduce never modifies theoriginal array
//map,filter,reduce returns a new array

//map--they are known as one liner ftn
let number=[2,3,4,5,6,7];//item
number.map((item)=>{
    console.log(item);
})
//o/p numbers wll appear on line


//filter--to filter out content based on conditn givn
let res=number.filter((item)=>{
    return item>3
})   
 console.log(res);//[4,5,6,7]

 //reduce--reduce all no's in to one value

 //here acc-accumulator--store result in each process
 //cur-act as item--it passes value in number--4,5,6,7
//  let res1=number.reduce((acc,cur)=>acc += cur,0);
let res1=number.reduce((acc,cur)=>acc =acc+ cur,0);
 console.log(res1);

 let res2=number.reduce((acc,cur)=>acc =acc* cur,1);//1 is initial value
 console.log(res2);


 //SRING--used to represent text rather than numbers,"no and space inside" is fine
//charAt
let str="Lakhwinder Singh";
console.log(str.charAt(2));//k

//endWith
console.log(str.endsWith("g"));//false

//includes
let sentance="Hello World";
console.log(sentance.includes("World"));//true

//indexOf,LastIndexOf
console.log(sentance.indexOf("o"));//4
console.log(sentance.lastIndexOf("o"));//7

//length
console.log(sentance.length);//11

//replace
//--not going to manipulate the original string
console.log(str.replace("Lakhwinder","Lucky"));//Lucky Singh

//search
console.log(str.search("Lakhwinder"));//0--not true or false
console.log(str.search("Singh"));//0

//sunstr--fst value index positn,2nd value is the no of characters frm index positn mentioned in first value
console.log(sentance.substr(1,4));//ello

//sunstring--(1,4)1--first index value is inclusive,last index value is exclusive
console.log(sentance.substring(1,4));//ell

//for substring always the lower value is the starting index and higher value is the ending index,irresponsive of the position of the values mentioned
console.log(sentance.substring(4,1));//ell

let email="jasmeeazeez@gmail.com"
let value=email.split(".")
console.log(value);





