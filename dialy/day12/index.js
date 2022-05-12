
// const element=document.getElementsByClassName("test");
// console.log(element);

function ChangeColor() {
    let element=document.getElementsByClassName("test1");
    element[0].style.backgroundColor="red";
    element[1].style.backgroundColor="yellow";
    element[2].style.backgroundColor="orange";

}

function ChangeDirection() {
    let element=document.getElementsByClassName("test");
    element[0].style.flexDirection="column"

   

}

function ChangeImage() {
// let image=document.getElementsByTagName("img");
// image[0].src="./shake1.jpg";

//or
document.getElementsByTagName("img")[0].src="./shake1.jpg";
}

function Edit() {
    const Edit1=document.getElementsByTagName("h1");
    Edit1[0].innerHTML=`<div><b>MULTIVERSE OF UNIVERSE</b></div>`;
    
    Edit1[0].innerHTML=`<img src="./shake1.jpg"/>`
}//if u try to chnge src of 2 imgs in 1 ftn,u might get err,so handle thm usng diff ftn only


//to create html code using js
let element1=document.createElement("div");
element1.className="new";
element1.id="new";//we can hv class and id as same name---"new"
element1.setAttribute("for","value");
element1.innerText="Created div using JS";
console.log(element1); 
 //<div class="new" id="new" for="value">Created div using JS</div>

//to create image

let element2=document.createElement("img");
element2.className="image";
element2.setAttribute("src","./shake1.jpg");
console.log(element2);
//<img class="image" src="./shake.jpg">

//to make it to come on screen,not only on console
document.querySelector("h1.item").appendChild(element1);//text ll appear blw headng,ll appear with same clr of h1

document.querySelector("h1.item").appendChild(element2);//img ll appear blw headng






