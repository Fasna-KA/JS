//1.Given an array of 0's and 1's find out number of 0's

const array=[1,0,0,1,0,1,0,1,1,0]
let one=0,zero=0;

array.filter((x)=>{
    if(x===0){
      zero++  
    }
    else{
        one++
    }

})
console.log("No of zeros :",zero,"No of ones:",one);


//2.    Given an array find out total no. of odd and even nos.

const array1=[1,5,6,8,2,7,9,4,3,1]
let odd=0,even=0;

array1.filter((x)=>{
    if(x%2==0){
        even++

    }
    else {
        odd++
    }
})
console.log("No of odd:",odd,"No of even:",even);

//3.    Given a string find out number of vowels

const string="FASNA"
let vowels=0
string.split("").filter((x)=>{
    if(x=="A"||x=="E"||x=="I"||x=="O"||x=="U"){
        vowels++
    }

})
 console.log("No of vowels:",vowels);   















