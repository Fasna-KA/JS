//1.
function stack() {
    document.querySelector("h1.text").innerText="MERN Stack"
    
}
//2.
let r=document.getElementsByTagName("h1")
console.log(r);

//3.
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
  currentTime()

//4.
function Replace() {
    document.getElementById("text").innerText="Welcome to Elevation academy"
   
}

//5.
$("#Hide").click(function(){
    $(".Text2").hide();
})

