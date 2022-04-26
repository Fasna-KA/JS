//preincrement
let a=3
console.log(a);//3
console.log(++a);//4,In PRE it ll shwn on the same line


//Bit wise operators
console.log(2|3);//AND
console.log(2&3);//OR
console.log(2^3);//XOR
console.log(2<<3);//
console.log(2>>3);//

//ternary operation
2>3 ? console.log("2 is greater than 3"):console.log("2 is less than 3")
//it is wrng so statemnt 2 is executed so "2 is less than 3"

let x=2;
let y=3;
x>y ? x++ : x--;//it ll be appear on nxt line
console.log(x);//1

let u=2;
let v=3;
u>v ? console.log(u++):console.log(u--);//2,here it wnt appear in the same line
console.log(u);//1

//IF loop
function name(){

}
let g=3;
if(g>4){
    console.log(g);
}//IF loop
else{
    console.log("Entered inside else block");
 
}//if else

//if else if
function name(){

}
let d=3;

if(d>4){
    console.log(d);
}
else if(d==3){
 console.log("d value is 3")
}
else{
    console.log("Entered inside else block");

}

//if a persn is child adult or senior citizen

let age =null;

if(age<18){
    console.log("iam child")
}
else if(age>=18 && age<60){
    console.log("iam adult")
}
else{
    console.log("iam a senior citizen")
}


//switch
let value=2;
switch(value){
    case 1:
        console.log("iam One")
        break;
    case 2:
        console.log("iam Two")
        break;
    case 3:
        console.log("iam Three")
        break;
    case 4:
        console.log("iam Four")
        break;
    default:
        console.log("iam greater than four")
        break;
   
}//iam Two

let number=2;
switch(number){
    case 1:
        console.log("iam One")
        // break;
    case 2:
        console.log("iam Two")
        // break;
    case 3:
        console.log("iam Three")
        break;
    case 4:
        console.log("iam Four")
        // break;
    default:
        console.log("iam greater than four")
        break;
   
}//iam Two ,iam Three
//after 2 it wont find break.so it wll prnt below thng too nd print until break is found.






