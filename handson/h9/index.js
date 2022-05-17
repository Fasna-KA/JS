
//1.Write the code to access element which is having id as "text"

const element=document.getElementById("text");
console.log(element);

//2.Write the code to access element which is having tag as "h1"

const element1=document.getElementsByTagName("h1")
console.log(element1);
// console.log(element1[0].innerHTML); 

//3.Write the code to access element which is having class as "box"

const element2=document.getElementsByClassName("box");
console.log(element2);

//4."<h1>Hello </h1>

//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

const changeText=document.getElementsByTagName("h1");
console.log(changeText[1].innerText="Hello World!");

//5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function ChangeDirection() {
    const element3=document.getElementsByClassName("test");
    element3[0].style.flexDirection="column"
    
}

//6.What’s the difference between window vs document?
//window - When JavaScript is executed inside the browser, the window object is the JavaScript Global object.The window object represents the browser window.
//document -The document object is a property of the window object.The document object represents the HTML document loaded in that window.

//7."<h1>Hello </h1>

//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

// const element4=document.getElementsByTagName("h1");
const element4=document.createElement("h1")
element4.innerText="Hello"
element4.style.color="red";
element4.id="heading";
console.log(element4);

//8.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function ChangeText() {
    const element5=document.getElementsByTagName("h1");
    element5[2].innerText="Welcome to Elevation academy"
    
}

//9.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function currentTime() {
    let date = new Date(); //Object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

// //
// function addZero(i) {
//     if (i < 10) {i = "0" + i}
//     return i;
//   }
  
//   const d = new Date();
//   let h = addZero(d.getHours());
//   let m = addZero(d.getMinutes());
//   let s = addZero(d.getSeconds());
//   let time = h + ":" + m + ":" + s;
//   document.getElementById("demo").innerHTML = time;
//   let t = setTimeout(function(){ addZero() }, 1000);

// setInterval(addZero(),1000)

//10.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}



//11."Create a form having name ,email, phone no. , birth year Add validations - phone no. should start with 91 , it should be 10 digits email should be domain prepbytes.com birth year should be > 95"

function form(){
    var form = document.createElement("form");
    form.setAttribute("method","get");
    form.setAttribute("action","submit");

var N= document.createElement("input");
var brr = document.createElement("br");
N.setAttribute("type","text");
N.setAttribute("name","Name");
N.setAttribute("placeholder","name");

var E= document.createElement("input");
E.setAttribute("type","email");
E.setAttribute("name","Email");
E.setAttribute("placeholder","email@prepbytes.com");
E.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com")

var P= document.createElement("input");
P.setAttribute("type","number");
P.setAttribute("name","Phone no:");
P.setAttribute("placeholder","Phone number");
P.setAttribute("maxlength","12");
P.setAttribute("pattern","[91]{2}[0-9]{10}");

var DB= document.createElement("input");
DB.setAttribute("type","date");
DB.setAttribute("name","DOB");
DB.setAttribute("placeholder","DOB");
DB.setAttribute("min","1995-10-30");

form.appendChild(N);
form.appendChild(E);
form.appendChild(P);
form.appendChild(DB);
form.appendChild(brr);

document.getElementsByClassName("form")[0]
    .appendChild(form);
}
form();