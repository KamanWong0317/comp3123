// // Variable Subdtitutions(Using Back quote)
let fn = "kaman";
let ln =  "Wong";
let fullName = `Welcome ${fn}, ${ln}!`;
console.log(fullName);
// -------------------------------------------------

let price = 10;
let tax = 0.25;
let total = `Total:${(price *(1 + tax)).toFixed(2)}`; //dicimel part
console.log(total);

// //-----------------------------------------------------------------
// // for...of loop
const arr = [10, 20, 30];
for (let v of arr){console.log(v);}

// // ------------------------------------------------------------
// // Arrow function
// // normael function
function myfun(){console.log("Hello");}
myfun();

function myfun2(a){return a+2}
var v =myfun2(3);
console.log(v)

// // assign function to veriable
var hello = function(){console.log("1: Hello World !");}
hello();
hello = function(){return "2: Hello World !";}
console.log(hello())

// // we cant use arrow function non-return function
// // because the value of veriabie will be undefind
var hello = () => {console.log("temp: Hello World !");}
console.log(hello());
hello = () => {return "3: Hello wprld !"}
console.log(hello());

// // arrow function with return vlaue: there is no needs return statment
hello = () => "4: Hello World !";
console.log(hello());

// // with perameter
hello = (val) => "Hello "+ val;
console.log(hello("Ali"));

// // parenthesis could also be removed when there is only one parameter
hello = val => "Hello "+val;
console.log(hello("Mohammed"));

// // Two peramcters 
function add(a,b){return a+b;}
console.log("Using normal function "+ add(2,3)); //output: 5

const addarrow = (a,b) => a+b;
console.log("Using Arrow function "+ addarrow()); //output: 5

// use substitition with arrow function
let currency = n => `$${n}`
console.log(currency(80)) //$80
//-------------------------------------------------------------------------------------------

// Spread operator
// The JavaScript spread operator (...) allows us to quickly  
// copy all or part of an exisiting array or object into another array or object.
const arrOne =[1,2,3]
const arrTwo =[4,5,6]
const arrComb =[...arrOne, ...arrTwo]
console.log(arrComb) // [1,2,3,4,5,6]
// 
const num =[1,2,3,4,5,6];
const [v1, v2, ...remain] = num; //[v1,v2, ...remain] is a collection of veriables
console.log(v1,v2,'-',remain);

// split string
var s = "hello";
var arrs = s.split("");
console.log(arrs);
//  join Array
var s2 = arrs.join(",");
console.log(s2);

// // spread operstor with functions
var myArr = [1,8,5,7];
const addTwoToFirstitem =([v1, ...rem])=> v1+2;
console.log("adding to myArr: ", addTwoToFirstitem(myArr));

// Lab Exercise 1 
function capFC1(s) {return s[0].toUpperCase() + s.slice(1);}
console.log(capFC1("hello world !"));

const capFC2 = ([f1, ...rw]) => f1.toUpperCase() + rw.join("");
console.log(capFC2("hello world !"));

// //----------------------------------------------------------------
// // Array.prototype.map
// // the map() method creates a new array by applying 
// // a given function to each element of the original array. 
var num2 = [1,4,9,4,16];
var newfnum1 = num2.map((n)=> Math.sqrt(n));
console.log(newfnum1);

const add3 = v=> v+3;
var newfnum2 = num2.map((n) => add3(n));
console.log(newfnum2);

// // --------------------------------------------------------------
// // Array.prototype.filiter
// // The filter() method creates a new array containing only 
// elements that satisfy a specified condition.
var num3 =[12,5,8,130,44];
var f1 =num3.filter((val)=>val>=10);
var f2 = [12,5,8,130,44].filter((val)=>val>=10);
console.log(f1);
console.log(f2);

// filiter with fubction
function isBig(v){return v>=10;}
var f3 = [12,5,8,130,44].filter(isBig);
console.log(f3);

var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
var r = words.filter((w) => w.length > 6);
console.log(r);
// ---------------------------------------------------------------------------------------------

// // Array.prototype.redure() is used in an array to return a 
///single value from an array after executing the callback function (like loop) on each element 
///of the array. 
const arrRed = [10, 18, 30, 41, 60];
const myReducer = (t,e) => t + e; /// t is total and e is element

// 10 + 18 + 30 + 41 + 60
console.log(arrRed.reduce(myReducer)); //159

// add initialValue for total  = 20
console.log(arrRed.reduce(myReducer, 20)); //179
// // ---------------------------------------------------------
class Person{
    constructor(name, age){
        this.name =name;
        this.age = age;
    }

    setName(n) {this.name = n;}
    getName(){return this.name}

    setAge(a) {this.age = a;}
    getAge(){return this.age}

    details(){
        var det = this.name+", "+this.age;
        return det
    }
}
const person1 = new Person("Sara", 30);
person1.setName("Jordan");
console.log(person1.name); // Output: Jordan
console.log(person1.age);  // Output: 30
console.log("Details : "+person1.details());

// //------------------------------------------------------------------------------

// // super and suberclass
class Car {
    constructor(brand) {this.brand = brand;}
    setCarName() {return 'I have a ' + this.brand;}
  }
  
  class Model extends Car {
    constructor(brand, model) {
      super(brand);
      this.model = model;
    }
    show() {return this.setCarName() + ', it is a ' + this.model;}
  }
  
  let myCar = new Model("Ford", "Mustang");