//Async/Await - They are used to handle the promises more effectively . The word async is used before a function to make sure that it returns a promoise.So,we therefore use async before the function to return a promise instead of some values/function.

//Await is used to wait for the result that is supposed to be returned from the Promises.So,we can use the keyword await when calling the function which returns a promise.

//Async/Await is also used for making the API calls

//Await is always used with Async

const fn1 = () => {
    return "Iam function One"
}
const fn3 = () => {
    return "Iam function Three"
}
// const fn2 = () => {
//     setTimeout(() => {
//         // return "Iam function Two"//return wont work for swrtimeout/asynchronous
//         console.log("Iam function Two");//Iam function Two---output printed
//     }, 3000);
// }

const fn2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Iam function Two")//in Promise we give resolve
        }, 3000);
    })
}

// const callFns = () => {
    
//     let res1 = fn1();
//     console.log(res1);//Iam function One

//     let res2 = fn2();
//     console.log(res2);//undefined

//     let res3 = fn3();
//     console.log(res3);//Iam function Three


// }
// callFns()

//other exmple
// const fn = () => {
//     setTimeout(() => {
//         console.log();
//     }, 3000);
// }
// console.log(fn());//undefined


const callFns = async () => { //----------Here we give async
    
    let res1 = fn1();
    console.log(res1);//Iam function One

    let res2 = await fn2();//----------Here we give await,JS wait for 3s,and o/p is printed--here it wait bcoz,we given promise in ftn2
    console.log(res2);//Iam function Two

    let res3 = fn3();
    console.log(res3);//Iam function Three


}
callFns()

//
async function tryingPromises() {
    console.log("Iam inside function");
    const response = await fetch('https://api.github.com/users')

    console.log("Before the response was received");

    const users = await response.json()
    console.log("Users are resolved");

    return users;
}

console.log("Before calling function");
let data = tryingPromises();
console.log("After calling the function");
console.log(data);
data.then((res)=>{
     console.log("The response received is",res);
     res.map((item)=>{
         console.log(item);
         console.log(item.id);
     })
})
console.log("End of program");


setTimeout(() => {
    console.log(data);
}, 2000);








