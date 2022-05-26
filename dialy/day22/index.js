
// const handleSubmit = () => {
//     const username = document.getElementById("name").value
//     console.log(username);

// }
const showDetails = () => {

}


//create a form,
//Name,Age,College,Email,Phone no
const Submit = () => {
    const username1 = document.getElementById("name").value
    localStorage.setItem("username1",username1)
    sessionStorage.setItem("username1",username1)
    console.log(username1);


    const username2 = document.getElementById("email").value
    console.log(username2);
    localStorage.setItem("username2",username2)
    sessionStorage.setItem("username2",username2)

    const username3 = document.getElementById("college").value
    console.log(username3);
    localStorage.setItem("username3",username3)
    sessionStorage.setItem("username3",username3)

    const username4 = document.getElementById("number").value
    console.log(username4);
    localStorage.setItem("username4",username4)
    sessionStorage.setItem("username4",username4)

}
//to show in console
const Show = () =>{

}

//Errors
//-Type Error
//-Syntax Error
//-Reference Error
//
//Syntax Error--Error in code
//const value = () = {}-----"=>" is missing
//
//Reference Error-no reference to that variable
//console.log(david)-undefined
//
//Type Error - Error in type
//const b=10
//console.log(b())--not a function
//
//const c=10
//c=20

//Symbol

let sym1=Symbol("Cricket")
let sym2=Symbol("Cricket")
console.log(sym1,sym2);//Symbol(Cricket) Symbol(Cricket)
console.log(sym1 === sym2);//false

//Symbols are always guaranteed to be Unique


// TDZ - Its a place where the let and const variables reside as long as they are not declared. It also has a default value of undefined only but if we try to access them, then will get ReferenceError.






