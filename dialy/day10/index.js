//OBJECT--they r collection of properties and methods
//objects hav keys whch r converted to string types,the properties and method dnt follow the insertion order---comes no,thn alphabetc order
//create an object

let mobile ={//object
    brand:"iphone",
    weight:300,
    isWorking:true,
    7:"ios",

    displayInfo:function () {
        // console.log(`The brand is ${brand} and weight is ${weight}`);
        console.log(`The brand is ${mobile.brand} and weight is ${mobile.weight} and 7 plus ${mobile["7"]}
    and working is ${mobile["isWorking"]}
    `);

       
    }//`backtick(below esc key),&toller
}
console.log(mobile);//{7: 'ios', brand: 'iphone', weight: 300, isWorking: true, displayInfo: ƒ}
console.log(mobile.displayInfo());

mobile.camera="100px"
console.log(mobile);//{7: 'ios', brand: 'iphone', weight: 300, isWorking: true, camera: '100px', displayInfo: ƒ}

//method2
let mobile1={};//empty object

mobile1.brand="Oneplus";
mobile1.weight=400;
mobile1["camera"]="32px";

console.log(mobile1);

//method3

function Mobile(brand,weight,camera) {
    this.brand=brand;
    this.weight=weight;
    this.camera=camera;
    
}
let Apple= new Mobile("Apple",190,"13px");
let Oppo=new Mobile("Oppo",320,"150px")
console.log(Apple);

//to delete
delete mobile.isWorking;

//to check it is present
console.log(mobile.hasOwnProperty("brand"));//true

console.log(Object.keys(Apple));// ['brand', 'weight', 'camera']
console.log(Object.values(Apple));//['Apple', 190, '13px']

for (const[key,value] of Object.entries(Apple)){
    console.log(key,value);
}


//this
//in object this refers to Object
//when we use this keyword alone then it points to global Object
//in an function,this refers to parent Object

value=23;
console.log(value);

console.log(this);

//-------------------------------------------------------

let arr1=[1,2,3,4,5];


