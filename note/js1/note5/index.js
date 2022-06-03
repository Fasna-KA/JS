// function click() {
//     document.querySelector("h1.text").innerHTML="MERN stack"
// }
//1.
function changeText() {
    document.getElementById("changeText").innerHTML = "MERN stack";

}

//2.
let r = document.getElementsByTagName("h1")
console.log(r[0]);

//3.

function currentTime() {
    let date = new Date()
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
    let session = "AM"

    if(h==0){
        h=12
    }
    if(h>12){
        h=h-12
        session="PM"
    }
    let time = h+":"+m+":"+s+" "+session


    document.getElementById("clock").innerText=time

    let t=setTimeout(() => {
        currentTime()
    }, 1000);

}
currentTime()

//4.
function Replace() {
    document.getElementById("hello").innerText="Welcome to Elevation academy"
}

//5.
$("#Hide").click(function(){
    $("#world").hide()
})

//6.
const array = [1,0,1,1,0,1,0,1,0]
let one=0,zero=0

array.filter(x =>{
    if(x===0){
        zero++

    }
    else{
        one++
    }
})
console.log("No of zeros:",zero,"No of ones:",one);

//7.
const array1=[1,5,3,8,7,4,5]
let odd=0,even=0

array1.filter(x =>{
    if(x%2==0){
        even++
    }
    else{
        odd++
    }
})
console.log("No of Odd:",odd,"No of Even:",even);


//8.

const string ="FASNAa"
let vowels=0
string.split("").filter(x =>{
    if(x==="A"||x==="a"||x==="E"||x==="I"||x==="O"||x==="U"){
       vowels++ 
    }
})
console.log("No of vowels:",vowels);







