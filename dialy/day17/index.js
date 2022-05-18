
// //setTimeout and setInterval

// setTimeout((fruit1, fruit2) => {
//     console.log(fruit1,fruit2 );//
// },5000, "Banana", "Orange");

// const fruits= ["Banana","Orange"];
// const timer = setTimeout((fruit1,fruit2)=>{
//     console.log(fruit1,fruit2);//Banana Orange--after 5s
// },5000,...fruits);
// console.log("Waiting for time to finish");//frst print


// if(fruits.includes("Banana")){
//     clearTimeout(timer)
// }


//setInterval
// setInterval(() => {
//     console.log("Hi");//Hi for 2 times
// }, 2000);

const boardingPassenger = (n,wait)=>{
    const peoplePerGroup=n/3

    setTimeout(()=>{
        console.log(`Boarding ${n} number of passenger`);
        console.log(`Boarding ${peoplePerGroup} number of passenger`);
        console.log("Boarding in secs",wait);
    },wait*1000);
}
boardingPassenger(180,2)
