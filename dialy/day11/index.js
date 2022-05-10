console.log("working...");

const element1=document.getElementById("test");
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText);

const element2=document.getElementsByClassName('test1');
console.log(element2); //HTMLCollection(2) [p.test1, p.test1]
console.log(element2[0].innerHTML);//<span>Concentrate</span>
//HURRY UP!
console.log(element2[0].innerText);

console.log(element2[1].innerHTML);
console.log(element2[1].innerText);

const element3=document.getElementsByTagName("h1");
console.log(element3);
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);

console.log(element3[1].innerHTML);
console.log(element3[1].innerText);


function changeText() {
    const changeText=document.getElementsByTagName("h1");
    changeText[0].innerText="HELLO WORLD"
    console.log(changeText[0].innerText);

}

function changeColor() {
    const changeColor=document.getElementsByClassName("test1");
    changeColor[0].style.color="red";
    

    const changeColor1=document.getElementById("test");
    changeColor1.style.color="green";

 
}