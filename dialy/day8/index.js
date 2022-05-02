//Array
console.log("working");
//method1
//creatng and assigning value to array
let name = ["fasna","azhar","althaf"];
console.log(name);
//method2-create an empty array,nd start assigning value as per index position
let name1=[];
name1[0]="Rudoff";
name1[1]="Rudoff";
name1[2]="Rudoff";
name1[5]="Rudoff";
name1[7]="Rudoff";
console.log(name1);
//method3-creat array using array constructor
let name2 = new Array("minnu","aysha","safna");
console.log(name2);


let detail=["FASNA K A",22,"Althaf",25,"Brother"];
console.log(detail);

let detail2=[];
detail2[0]="Azhar";
detail2[1]="Fasna";
detail2[3]="Hanana";
detail2[4]="Fousi";
console.log(detail2);

let detail3= new Array("QM",1-10);
console.log(detail3);

//push,pop,shift,unshift,length,indexOf,lastIndexOf

//push-to add elements in last 
name .push("Jasmin","Azeez");
console.log(name);

//pop-to remove frm last position
name1.pop();
name1.pop();//to remove last 2 values
console.log(name1);


//Shift-to remove frm 1st position
name2.shift();
console.log(name2);
//UnShift-add to 1st position
name2.unshift("Haseena");
console.log(name2);

//length-gives length of array
console.log(detail.length);

//indexOf,LastIndexOf,join,concat,reverse,sort,slice,splice

let num=[1,2,2,3,5,5];
let num1=[6,5,8,9,4,4];

console.log(num.indexOf(5));
console.log(num.lastIndexOf(5));

//concat,join
num.concat(num1);
console.log(num);
console.log(num1);
console.log(num.concat(num1));
console.log(num.join("*"));

//reverse
console.log(num1.reverse());

//sort
console.log(num.sort());//ascendng ordr
console.log(detail.sort());//alphabetic order,capital frst,thm small

console.log(detail.reverse().sort());
//sort followd by reverse gives value arrang in descendng order

//splice and slice

//splice-1st value--index value, 2nd value--no of values to be removed,frm 3rd value onwrds--wll add the givn values to 
let num3=[55,22,6,56,88,9,3];
// num3.splice(2,1,3,5,4,8);//index no=2,1-removes one value,and add 2 1 3 5 4 8 to it
// console.log(num3);//[55, 22, 3, 5, 4, 8, 56, 88, 9, 3]

//slice-1st index no is inclusive,last index is exclusive ie not included
console.log(num3.slice(2,5));//[6,56,88]