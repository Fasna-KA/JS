//API-Application Programming Interface

//It connects 2 application to pass from one to another..

//AJAX- It helps us to query the API's .It allows us to make the server calls and display the data without reloading the pages.
//It allows us to communicate with remote web servers in an asynchronous way with help of AJAX calls,we can request data from web servers dynamically .it helps us to create CRUD application

// $("button").click(function(){
//     $.ajax({
        
//         url:"https://jsonplaceholder.typicode.com/todos/1",
//         type : "GET",
//         success:function(response){
//          console.log(response); //{userId: 1, id: 1, title: 'delectus aut autem', completed: false}--out
//          document.getElementById("learn").innerHTML=response.title;//delectus aut autem--title of library will appear in html in-place of <p></p> ,when we click button "Hide" 
//          document.getElementById("learn").innerHTML=response.id;//1 will appear in <p>
//          document.getElementsByClassName("head").innerHTML=response.title
//         }
//     })
// })


//Callback Hell - They are just a name or convention for using Javascript functions. It  instead of returning result immediatly like other function.takes time to produce the result,These are more of like an I/O operations.
// CallbackHells are in a form of arrow shaped, pyramid shaped


const getEmployeeID = () => {
    setTimeout(() => {
        console.log("Fetching the Employee details");//Fetching the Employee details-after 2s
        let id = [1,2,3,4,5];
        console.log(id);//(5) [1, 2, 3, 4, 5]--aftr 2s
        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);//The name of the employee is Arjun Kanungo an the age is 34=-aftr 2s            setTimeout(() => {
                employeeDetails.gender = "Male",
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);//The name of the employee is Arjun Kanungo an the age is 34 and the gender is Male
                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                },2000);//The name of the employee is Arjun Kanungo an the age is 34 and the gender is Male and the salary is 21000
            }, 2000);
        }, 2000);
    },2000);
}
getEmployeeID();




