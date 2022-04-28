//loop- for,while,do while,for each,for-in

//for--initialise,condition checking,increment
for(let i=0;i<10;i++){
    console.log(i);
}
//statement can be executed multiplt times 
//we use let,const shows error
//for(){console.log()}
//starts with i=0 and end till i<10
//need upto 20 ,<=20


let a=10;
while(a>0){
    console.log(a);
    a--;//alwys write it in end of loop
}

//using for loop try to print multiple of 2 (2,4,6...20)

for(let j=1;j<=10;j++){
    console.log(j*2);
}

//2 ways 2*a or a=a+2
let d=2;
while(d<21){
    console.log(d);
    d=d+2;
}

//do while
//let=2,define c first
//initialise>print>increment>condition checking

let c=2
do {
    console.log(c);
    c=c+2;
} while (c<=20);

//for-in loop--give us index

//Array ["",""];
//in -gives array
//b-variable name
let names=["Althaf","Azhar","Fasna","Jasmine","Azeez","Safna"];

for(let b in names){
    console.log(b);
}

//for-of loop-- give us values
//of-gives values
//values-variable name

for(let values of names){
    console.log(values);
}

//for- each loop --

names.forEach((values,index)=>{//if we give value/intex first in both, we get value and then index
    console.log(values,index)
})
//value then ,index n0

names.forEach((values,index)=>{//if we give names alternate,we get index then 'value'
    console.log(index,values)
})

names.forEach((index,values)=>{
    console.log(values,index)
})
names.forEach((index,values)=>{
    console.log(index,values)
})




