//1
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ];
    
const res= studentRecords.map(x=>x.name.toUpperCase());
console.log(res);  //['JOHN', 'BABA', 'YAGA', 'WICK']    

//2

    // console.log(studentRecords.filter(mark=> mark.marks>50));
    let arr2 = studentRecords.filter(mark => mark.marks >50);
    console.log(arr2);


//3
 console.log(studentRecords.filter(x=> x.marks>50 && x.id>120));
//{name: 'John', id: 123, marks: 98}

 //4

let sum=studentRecords.reduce((acc,cur)=>
    acc+=cur.marks,0)
console.log(sum);//241

//5
let list=studentRecords.filter(y=>y.marks>50);
console.log(list.map(a=>a.name));
//['John', 'Wick']

//6
const students=studentRecords.filter(b=>b.id>120).reduce((acc,cur)=>acc+=cur.marks,0)
console.log(students);//143

//7.

// const sum1=studentRecords.filter(c=>c.marks>50).reduce((acc,cur)=>acc+=cur.marks,0)
// const sum2=studentRecords.filter(c=>c.marks<50).reduce((acc,cur)=>acc+=cur.marks,15)
let sum2 = studentRecords.map (function(mark){
                if(mark.marks < 50){
                    mark.marks +=15
                };
                return mark;
            }).filter(c=>c.marks>50).reduce((acc,cur)=>acc+=cur.marks,0)
    console.log(sum2); //233   
    
//let res1=sum1+sum2    
// console.log(res1);//256---271

//8
let list1 = [
    {name: 'Hanana', class: 'final year', rollno: 10},
    {name: 'Fasna', class: 'final year', rollno: 09},
    {name: 'Azhar', class: 'final year', rollno: 43},
    {name: 'Althaf', class: 'final year', rollno: 32},
    {name: 'Fousi', class: 'final year', rollno: 23},
    {name: 'Aslam', class: 'final year', rollno:20},
];
console.log(list1);

//or
function Student(name,rollno,cls) {
    this.name=name;
    this.rollno=rollno;
    this.cls=cls;
   
}
let student1= new Student ("HANANA",20,12);
let student2= new Student("AZHAR BUHAIS",10,12);
let student3= new Student ("ALTHAF",8,12);
let student4= new Student ("ASLAM",30,12);
let student5= new Student ("FOUSIYA",12,12);
let student6= new Student ("SWETHA",40,12);

console.log(student1,student2,student3,student4,student5,student6);


