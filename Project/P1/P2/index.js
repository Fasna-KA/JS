//Time Clock

function clock() {
    var date=new Date();
    var h=date.getHours()>12 ? date.getHours()-12 :date.getHours();
    h = h==0 ? 12 : h ;
    h = h <10 ? "0"+h : h;
    var session= date.getHours()>=12 ? "PM" : "AM"

    var m=date.getMinutes();
    m = m <10 ? "0"+m : m;

    var s=date.getSeconds();
    s = s <10 ? "0"+s : s;


   let element1= document.getElementsByClassName("p2");
   element1[0].innerHTML=h + "<br>hours";
   let element2= document.getElementsByClassName("p2");
   element2[1].innerHTML=m + "<br>mins";
   let element3= document.getElementsByClassName("p2");
   element3[2].innerHTML=s + "<br>secs";

}
setInterval(clock,1000)
clock();
//dropdown
function displayGreetings() {
    var date = new Date();
    var h= date.getHours();

    let waketime = document.getElementById("wakeup").value
    let lunchtime = document.getElementById("lunch").value
    let naptime = document.getElementById("nap").value
    let nighttime = document.getElementById("night").value

    
    if(waketime == h){
        document.getElementsByTagName("img")[1].src="./images/view.jpg";
        let e2=document.getElementsByClassName("g1");
        e2[0].innerHTML="GRAB SOME HEALTHY BREAKFAST!!";
        let e3=document.getElementsByClassName("pp1");
        e3[0].innerHTML="GOOD MORNING WAKE UP ";

    }
    
    if(lunchtime == h){
        document.getElementsByTagName("img")[1].src="./images/lunchImage.png";
        let e2=document.getElementsByClassName("g1");
        e2[0].innerHTML="LET'S HAVE SOME LUNCH !!";
        let e3=document.getElementsByClassName("pp1");
        e3[0].innerHTML="GOOD AFTERNOON !! TAKE SOME REST";

    }

    if(naptime == h){
        document.getElementsByTagName("img")[1].src="./images/coffee.jpg";
        let e2=document.getElementsByClassName("g1");
        e2[0].innerHTML="STOP YAWNING,GET SOME TEA.. ITS JUST EVENING!";
        let e3=document.getElementsByClassName("pp1");
        e3[0].innerHTML="GOOD EVENING !!";

    }
    if(nighttime == h){
        document.getElementsByTagName("img")[1].src="./images/sleepScore.png";
        let e2=document.getElementsByClassName("g1");
        e2[0].innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        let e3=document.getElementsByClassName("pp1");
        e3[0].innerHTML="GOOD NIGHT !!";


    }
    
    displayValue()
}

//div creates under party Time!!

function displayValue() {
    let waketime = document.getElementById("wakeup").value;
    let lunchtime = document.getElementById("lunch").value;
    let naptime = document.getElementById("nap").value;
    let nighttime = document.getElementById("night").value;

    var wakeValue = document.getElementById("wakeup");
    var value1 = wakeValue.options[wakeValue.selectedIndex].text;

    var LunchValue = document.getElementById("lunch");
    var value2 = LunchValue.options[LunchValue.selectedIndex].text;

    var napValue = document.getElementById("nap");
    var value3 = napValue.options[napValue.selectedIndex].text;

    var nightValue = document.getElementById("night");
    var value4 = nightValue.options[nightValue.selectedIndex].text;

    if (waketime == "Select time") {
      document.getElementById("awake").innerHTML = "";
    } else {
      document.getElementById("awake").innerHTML =
        "Wake up time : " + value1;
    }

    if (lunchtime == "Select time") {
      document.getElementById("alunch").innerHTML = "";
    } else {
      document.getElementById("alunch").innerHTML =
        "Lunch time : " + value2;
    }

    if (naptime == "Select time") {
      document.getElementById("anap").innerHTML = "";
    } else {
      document.getElementById("anap").innerHTML = "Nap time : " + value3;
    }
    if (nighttime == "Select time") {
        document.getElementById("sleep").innerHTML = "";
      } else {
        document.getElementById("sleep").innerHTML = "Night time : " + value4;
      }
  


  }








