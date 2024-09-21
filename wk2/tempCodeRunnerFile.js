
// // Exercise 2
// var capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

// console.log(capitalize('fooBar'));
// console.log(capitalize('noodJs'));

// // Exercise 3
// const colors = ['red', 'green', 'blue']

// var capitalizedColors = colorsArr => colorsArr.map( n => capitalize(n));
// console.log(capitalizedColors(colors));

// // Exercise 4
// var values =[1, 60, 34, 30, 20, 5]

// var filterLessThan20 = numArr => numArr.filter(n => n < 20);
// console.log(filterLessThan20(values));

// // Exercise 5
// var array = [1, 2, 3, 4]

// var calculateSum = arr => arr.reduce((t, i) => t + i);
// var calculateProduct = arr => arr.reduce((t, i) => t * i);
// console.log(calculateSum(array));
// console.log(calculateProduct(array));

// // Exercise 6
// class Car{
//     constructor(model, year){
//         this.model = model;
//         this.year = year; 
//     }
//     details(){return `Model: ${this.model} ` + this.year}
// }

// class Sedan extends Car{
//     constructor(model, year, balance){
//         super(model, year);
//         this.balance = balance;
//     }
//     info(){return `${this.model} has a balance of $` + this.balance.toFixed(2)}
// }

// const car2 = new Car('Pontiac Firebird', 1976);
// console.log(car2.details());
// // Subclass - extend Car super class
// const sedan = new Sedan('Volvo SD', 2018, 30000);
// console.log(sedan.info());

