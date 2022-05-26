//Promises
//Promises are used to handle asynchronous operation in JS.
//Asynchronous programming is a technique that enables your program to start a potentially long-running task, and then rather than having to wait until that task has finished, to be able to continue to be responsive to other events while the task runs.
//അസിൻക്രണസ് പ്രോഗ്രാമിംഗ് എന്നത് നിങ്ങളുടെ പ്രോഗ്രാമിനെ ദീർഘനേരം പ്രവർത്തിക്കാൻ സാധ്യതയുള്ള ഒരു ടാസ്‌ക്ക് ആരംഭിക്കാൻ പ്രാപ്‌തമാക്കുന്ന ഒരു സാങ്കേതികതയാണ്, തുടർന്ന് ആ ടാസ്‌ക് പൂർത്തിയാകുന്നതുവരെ കാത്തിരിക്കുന്നതിന് പകരം, ടാസ്‌ക് പ്രവർത്തിക്കുമ്പോൾ മറ്റ് ഇവന്റുകളോട് പ്രതികരിക്കുന്നത് തുടരാൻ കഴിയും.
//They are easy to manage when dealing with multiple asynchronous operations where multiple callbacks can create callback hells leading to unmanageable code.
//This doesn't means that Promises are only used for avoiding callback hells,instead are often used for handling asynchronous operations.
//Promises takes 2 executor functions as parameters,namely resolve and reject.If the data is fetched correctly then the control is passed to resolve method which in turn calls the .then() method,but if the data isn't fetched for some reasons i.e, there is an error, then the reject method is called which further calls the .catch() method
//Closures and Promise are different concepts. Closures refers to scope of variables where as promise are used to 'promise' that an act on something will occur when it is done on an asynchronous action.


//There are 3 stages in Promises
//1. Pending - When the Promises is still executed i.e, yet not resolved or rejected then they are called to be  in Pending stage
//2.Resolved/fullfilled - When the Promise is resolved or have fetched the data correctly ,it ends up being into resolved state .
//3.Rejected -  When the promise fails in fetching the result,it ends up being into rejected state.

// //promise creation
// const getEmployeeID = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let id = [1,2,3,4,5];
//         // resolve(id);//resolve catch by .then method
//         reject("The data isn't formed");//reject catch by .catch method
//     }, 2000);
// })

// //promise consuming-used for consumotion of promise
// getEmployeeID
//     .then((id)=>{//id is given as parameter
//         console.log("Array",id);

//     })
//     .catch((err)=>{
//         console.log("Error Message :",err);

//     })
//     .finally(()=>{
//         console.log("END");
//     })

//Promise Chaining---
//promise creation
const getEmployeeID = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);//resolve catch by .then method
        reject("The data isn't formed");//reject catch by .catch method
    }, 2000);
})

const getEmployeeDetails =(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((data)=>{
            let employeeDetails={
                name:"AZHAR",
                age:23,
            }
            console.log("Iam inside promise",data);
            resolve(`The name is ${employeeDetails.name} and age is ${employeeDetails.age}`);
            //resolve(data)//--it willnt execute,1st resolv ll execute
          
        },3000,data)
    })
}

//promise consuming-used for consumotion of promise
getEmployeeID
    .then((id)=>{//id is given as parameter
        console.log("Array",id);//Array (5) [1, 2, 3, 4, 5]
        getEmployeeDetails("Hi").then((data)=>{
            console.log("Iam inside",data);
        })

    })
    .catch((err)=>{
        console.log("Error Message :",err);

    })
    .finally(()=>{
        console.log("END");//END
    })


//Promise Chaining---

// let promise = new Promise((resolve,reject)=>{
//     resolve()
// })
// promise.then(()=>{
//     setTimeout(() => {
//         console.log("First Call");
//     },1000 );
// }).then(()=>{
    
//     setTimeout(() => {
//         console.log("Second Call");
//     },2000 );
// }).then(()=>{
//     setTimeout(() => {
//         console.log("Third Call");
//     },3000 );
// })

let promise = new Promise((resolve,reject)=>{
    resolve()
})
promise.then(()=>{
    setTimeout(() => {
        console.log("First Call");
    },1000 );
}).then(()=>{
    return new Promise((resolve,reject)=>{//need promise to execute "Second Call" second
    setTimeout(() => {
        console.log("Second Call");
        resolve();//need resolve
    },3000 );
})
}).then(()=>{
    setTimeout(() => {
        console.log("Third Call");
    },2000 );
})

