console.log("Hello");
var prompt = require("prompt-sync")
({sigint:true});

var msg = prompt("input your name: ");
console.log("Hi: ",msg);

/*calculations
console.log(x)
var a =5
let y = 6;
console.log(b-a);
console.log(a*b);
console.log(a/6);
console.log(Math.pow(a,b));
*/

//----------------------------------------------------------

//conditilonal statements 
var m = prompt("Input your mark: ");
m = parseInt(m);
switch(m)
{
    case 75:
        console.log("Very Good");
        break;
    case 60:
    case 50:
        console.log("pass"); 
        break; 
    default:
        console.log("Invalide");
        break;
}
/*
var m = prompt("Input your mark: ");
if(m >= 0 && m <= 100){
    if(m >= 75){
    console.log("Very Good");}
    else if(m >= 50){
    console.log("pass");}
    else{
    console.log("Invalide");}
    }

/*
for(var i = 1; i <= 5 , i++){
    console.log(i);
}

var j =5 ;
while(j>=1){
    console.log("J: ", j);
    j--;
}

var myCars = ["BMW", "Mazda", "Ford"];
for(var i = 0 ; i < myCars.length; i++){
    if(myCars[i] == "Mazda"){
        break
    }
    console.log(myCars[i])
}
*/

//function
function myFun1(){
    console.log("Hello from myFun1");
}
//myFun1()

function myFun2(){
    return "Hello from myFun2"
}

var v = myFun2();
console.log(v);

function myFun3(a, b){
    return a+b
}

var v2 = myFun3(5,6);
console.log(v2);

//---------------------------------------------------

var s1 = "Mohammed";
console.log(s1.length);
for(var i = 0; i<s1.length;i++){
    console.log(s1.charAt(i));
} 


var str = "How are you doing?"
let part1 = str.slice(5,8);
console.log(part1);

let part2  = str.substring(4,8);
console.log(part2);

var strArr = str.split("");
console.log(strArr.length);

for( var i = 0; i < strArr.length; i++){
    console.log(strArr[i]);
}

//---------------------------------------------
//lower case and upper case
var strUpper = str.toUpperCase();
console.log(strUpper);

var strLower = str.toLowerCase();
console.log(strLower);
