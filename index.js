// console.log("World");

//variable//
// let name = "afzal";
// console.log(name);

//constant
// const intestRate = 0.4;
// intestRate = 1;
// console.log(intrestRate);

//primitive type

// let name = "Muhammad";
// let age = 30;
// let isApproved = false;

// let firstName = undefined;

// let lastName = null;

//object

// let person = {
//   name: "afzal",
//   age: 29,
// };

// //dot notation

// person.name = "naeem";

// //bracket notation
// person["name"] = "Muhammad";
// console.log(person.name);

//array

// let selectedColors = ["green", "yellow"];
// selectedColors[2] = "red";
// console.log(selectedColors.length);

//function

// function greet(color, lastName) {
//   //parameter in ()   // function has multiple parameter
//   console.log("Hello" + color + "" + lastName);
// }

// greet("red"); // arguments in ()     put; in the end to indicate that it is an statment

// //calculating a value
// function square(number) {
//   return number * number;
// }
// console.log(square(2));

//Arithmatic operator
// let x = 19;
// let y = 34;
// console.log(x + y);      //expresion is somthing that produces a value in ()
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);     //exponentition  x power of y
// console.log(--x);        decrement
// console.log(x++);        increment

//comparison operator..

// let x = 1;
// // console.log((x /= 2));
// // console.log(x === 1);
// console.log(x !== 1);

//function declaration
// function color() {
//   console.log("red", "yellow");
// }

// color();

// function car() {
//   console.log("color", "name", "year");
// }

// car();

// function expression

// const name = function (car) {
//   // console.log("naeem afzal");
//   console.log("hello ${car}");
// };

// name("bmw");

// const area = function (radius) {
//   let area = 3.14 * radius ** 4;
//   return area;
// };

// const a = area(3);
// console.log(a);

//arrow function

// const calArea = (radius) => {
//   let calArea = 3.14 * radius ** 2;
//   return calArea;
// };

// const b = calArea(5);
// console.log(b);

///

// const area = (radius) => {
//   let area = 3.14 * radius ** 5;
//   return area;
// };

// const c = area(2);
// console.log(c);

// const greet = () => "hello world";

// const result = greet();
// console.result(greet);

// function sum(x, y) {
//   num1 = parseInt(x);
//   num2 = parseInt(y);
//   return num1 + num2;
// }
// sum();

// function run() {
//   console.log("run");
// }
// let move = run;
// move();
// run();
//...

// function twoNumber() {
//   const sum = first + second;
//   console.log("sum", sum);
// }

// const first = 50;
// const second = 20;

// console.log("sum", sum);

// function tellMyage() {

// x =

// }
// const birthYear = 1995;
// birthYear = x

//  console.log((x /= 2));

// console.log();
// tellMyAge(birthYear);

// if else..##

// let hour = 22;

// if (hour >= 6 && hour < 10) {
//   console.log("good morning");
// } else if (hour >= 12 && hour < 17) {
//   console.log("good afternoon");
// } else if (hour >= 18 && hour < 23) {
//   console.log("good evening");
// } else console.log("hi");

//Switch case ####
// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("guest user");
//     break;

//   case "moderator":
//     console.log("moderator user");
//     break;

//   default:
//     console.log("unknown user");
// }

// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("guest user");
//     break;

//   case "moderator":
//     console.log("moderator user");
//     break;
//   default:
//     console.log("unknown user");
// }

//for Loop ##

// for (
//   let i = 1;
//   i <= 20;
//   i++ // for (let i = 20; i > 1; i--)
// ) {
//   console.log(" hi world ", i);
// }
// // example
// for (i = 0; i < 5; i++) {
//   console.log("hi", i);
// }

// for (let i = 0; i <= 6; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// var myArray = [];
// for (var i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }
// console.log(myArray);

//while loop ##

// let i = 0;
// while (i <= 5);                     // don´t executed if the condition is false
// {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// do while

// let i = 7;
// do {
//   // do while loop is always executed atleast once
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// for in Loop #####

// const person = {
//   name: "afzal",
//   age: 28,
// };

// for (let key in person) console.log(key, person[key]);

// const colors = ["red", "green", "yellow"];

// for (let index in colors) console.log(index, colors[index]);
// example # 2
// const person = {
//   name: "muhammad",
//   age: 30,
// };

// for (let key in person) console.log(key, person[key]);

// const car = ["year", "name", "color"];
// for (let index in car) console.log(index, car[index]);

// let i = 2;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// function square(number,big) {

// if ( number**2 == big ){

// }
// else {

// }

// }

// console.log();
// square(4,16);

// function array1() {
//   var arr = [1, 8, 6, 10];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 6) console.log("number found ", arr[i], "at index", i);
//   }
// }

// array1();

//....

//   if (((i = 0), i < arr.includes, i++)) return true;
//console.log(arr.includes(6));

//   console.log(6 == "6");
//   console.log(6 === "6");

///---------------
// function hiHello(myName, age, height, color) {
//   console.log("world", myName, age, height, color);
//   console.log("hiii");
//   console.log("33444");
// }

// var myName = "afzal";
// console.log(myName);
// hiHello("myName", 45, 2, "red");

// var number1 = 4;
// var number2 = 6;
// function add(n1, n2) {
//   console.log(n1 + n2);
// }
// add(number1, number2);
// add(3, 6);
// add(44, 55);

// function ShowMessage(firstName, lastName) {
//   alert("Hello " + firstName + " " + lastName);
// }
// console.log(ShowMessage);
// ShowMessage("Steve", "Jobs", "hi");
// ShowMessage("Bill", "Gates");
// ShowMessage(100, 200);

///.....
// function ShowMessage() {
//   alert("hi " + arguments[0] + " " + arguments[1]);
// }
// ShowMessage("ali", "ahmed");

// function ShowMessage() {
//   for (var i = 0; i < arguments.length; i++) {
//     alert(arguments[i]);
//   }
// }
// ShowMessage("afzal", "muhammad");
// console.log("ShowMessage");

// function Sum(val1, val2) {
//   return val1 + val2;
// }

// document.getElementById("p1").innerHTML = Sum(10, 20);

// function Multiply(val1, val2) {
//   console.log( val1 * val2);
// };

// result = Multiply(10,20);

// const arr = ["a", "b", "c", "d", "e"];
// const arr1 = ["b", "d", "e", "f", "g"];
// const result = [];

// function compareArray() {
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr[i] == arr1[i]){
//         result.push(arr[i]);
//     }
//   }

//   //   for (var i = 0; (i = arr.length); i++) {
//   //     if (this.length != arr.length) return false;
//   //     // if (arr[i] === arr1)
//   //   }
//   //   return true;
//   // }
// }
// console.log(result);

// compareArray();

// for (var i = 1; i <= 10; i++) {
//   console.log(i * 5);
// }

///Array/////////////////

// adding elements

// const number = [5, 6];

// number.push(8, 9);

// number.unshift(1, 2);

// number.splice(2, 0, 77, 55, "g");
// console.log(number);

// 3- Finding Elements (Primitives)

// const numbers = [2, 4, 5, 5];

// console.log(numbers.indexOf(5));

// console.log(numbers.length);

// console.log(numbers.lastIndexOf(5));

// console.log(numbers.indexOf(5));
// const myNumber = 3;
// let result = 1;
// const arr = [10, 20, 30, 40, 50, 60];
// // const sum = 0;

// function arraySecond(abc) {
//   for (var i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       result = arr[i + 1] + abc;
//     }
//   }

//   // result = abc + myNumber;

//   return abc;
// }

// arraySecond(result);
// console.log("hELLO", abc);

// const myNumber = 3;
// let result = 0;
// const arr = [10, 20, 30, 40, 50, 60];
// // const sum = 0;

// function arraySecond(abc, array, number) {
//   for (var i = 0; i < array.length; i++) {
//     if (i % 2 == 0) {
//       sum = array[i + 1] + abc + number;
//     }
//   }

//   return sum;

//   // result = abc + myNumber;
// }

// console.log("hELLO", arraySecond(result, arr, myNumber));

////3- Finding Elements (Primitives)

// const numbers = [4, 8, 33, 99];

// console.log(numbers.indexOf(33));

// console.log(numbers.lastIndexOf(99));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(8));

// 4- Finding Elements (Reference Types)

// const subject = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// console.log(subject.includes({ id: 1, name: "a" }));
// console.log(subject.includes({ id: 1, name: "a" }));

// var array1 = [40, 2, 5, 23, 66];

// var found = array1.find(function (element) {
//   return element < 10;
// });
// console.log(found);

// 5- Arrow Functions
// const subject = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const subjects = subject.find((subjects) => subjects.name === "a");

// console.log(found);

// 6- Removing Elements

// const numbers = [1, 2, 3, 4];

// // //END
// // const last = numbers.pop();
// // console.log(numbers);
// // console.log(last);
// // //FIRST
// // const first = numbers.shift();
// // console.log(numbers);
// // console.log(last);
// //MIDDLE
// numbers.splice(2, 2);
// console.log(numbers);

// // 7- Emptying an Array
// let numbers = [1, 2, 3, 4];

// let another = numbers;
// //solution 1
// numbers = [];

// //solution 2
// numbers.length = 0;

// console.log(numbers);
// console.log(another);

// 8- Combining and Slicing Arrays
// var first = [1, 2, 3, 4];
// var second = [-2, 5, 6, 7, 7, 9];

// var combined = first.concat(second);

// var seperate = combined.slice(2, 6);
// console.log(combined);
// console.log(seperate);

// // 9- The Spread Operator

// const first = [1, 2, 3, 4];
// const second = [7, 3, 5, 7, 4, 3, "a"];

// var combined = [...first, "c", ...second, "tea"];
// console.log(first, second, combined);

// 10- Iterating an Array

// const numbers = [1, 2, 3, 4, 56, 7, 8];

// for (var number of numbers) console.log(numbers);

// numbers.forEach((number, index) => console.log(index, numbers));

// 11- Joining Arrays

// const numbers = [1, 3, 54, 6, 3, 5];
// let joined = numbers.join(",");
// console.log(joined);

// var message = "This is my first message";
// const parts = message.split("");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);
// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join("-"));

// 12- Sorting Arrays

// const subjects = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "´Javacript" },
// ];

// subjects.sort(function (a, b) {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });
// console.log(subjects);

// 14- Filtering an Array

// let numbers = [6, 7, 4, 7, 4, 3, -4];
// /////we can write by this in short form///
// const filtered1 = numbers.filter((value) => value >= 4);   //////////below these two lines code are short the code with function
// const filtered1 = numbers.filter(n => n >= 4);
// //////////////////////////////////
// const filtered = numbers.filter(function (value) {
//   return value >= 4;
// });
// console.log(filtered);

// console.log(filtered1);

// 15- Mapping an Array

// a[i] - a[i - 1] != 1)
// const numbers = [2,3,4,5,-33];
// const filtered = numbers.filter(n => n >= 0 );

// filtered.map()

// console.log(filtered);

// task
// const array3 = ["s", "s", "s", "s", "s", "s", "s", "s", "2"];
// const array1 = ["s", "s", "c", "2"];
// const array2 = ["s", "c", "2", "s", "2", "c"];
// function consective(array) {
//   for (var array, i = 0; i < array.length; i++) {
//     if (array[i] == "s") {
//       if (array[i + 1] == "2") {
//         if (array[i + 2] == "c") {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// console.log(consective(array1));

// const array1 = [10, 40, 20, 50, 60];
// const array2 = [0, 0, 0, 0, 0];

// // array1.sort((a, b) => a - b);
// function highestArray(array) {
//   for (var array, i = 0; i < array.length; i++)
//     if (array[i] > biggest) {
//       nextbiggest = biggest;
//       biggest = array[i];
//     }

//   {
//     return;
//   }
// }
// console.log(highestArray(array1));
// arr = [10, 40, 20, 50, 60, 79];
// arr1 = [0, 0, 0, 0, 0, 0, 0, 0];

// arr2 = [0, -10, -30, 20, 15, 12, 18, , 19, 21];
// function thirdLargest(arr) {
//   var max1st = arr[1];

//   var max3rd = 1;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       max3rd = max1st;
//       max1st = arr[i];
//     } else if (arr[i] > max3rd && arr[i] !== max1st) {
//       max3rd = arr[i];
//     }
//   }

//   return max3rd;
// }

// console.log(thirdLargest(arr));

////////////////////////

// arr2 = [10, -10, -30, 20, 15, 12, 18, , 19, 21];
// function thirdHighest(array) {
//   let max;
//   for (var i = 0; i < array.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       if(arr[i] > ){

//       }
//     }
//   }
// }

// console.log(thirdHighest(array));

///////////////////////////////////////////////
////Problem 1
// const number = (2, 5);
// function sum1(x, y) {
//   var sum = x + y;
//   if (sum % 2 == 0) {
//     console.log("Number is considered even");
//   } else {
//     console.log("The number is odd");
//   }
// }
// console.log(sum1(2, 5));

// ////problem 2
// let myArray = [
//   "S2C",
//   "is",
//   "really",
//   "cool",
//   "and",
//   "help",
//   "with the",
//   "development",
// ];

// function array4(array) {
//   var s = "";
//   for (var i = 0; i < array.length; i++) {
//     s = s + array[i] + " ";
//   }
//   console.log(s);
// }
// array4(myArray);
// /////////////////////////////

////////////problem3

// var directions = ["add", "subtract", "multiply", "add"];

// var numbers = [2, 5, 8, 0];
// var result;
// function array(numbers) {
//   for (i = 10; i < numbers.length; i++) {
//     if (arr[i] + numbers == add) {
//       return directions;
//     }
//   }
// }

// console.log(array(directions));

/////////////////
// ///////problem 4///////

// when we use var outside a function it create a global variable an it attach the var to the window object in browser
// so the problem is if we are using third
// party window and there is also a var variable with the same name it weill be overwrite.

// let declarations and  const declarations can only be accessed within the block they were declared.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared;
// const variables can neither be updated nor re-declared.

////////////problem5//////
// var sum = 0;
// function multiplyAll() {
//   for (i = 1; i <= 10; i++) {
//     console.log("i: " + i, [i]);
//     for (j = 1; j <= 5; j++) {
//       sum = sum + i * j;
//     }
//   }
//   return sum;
// }
// console.log(multiplyAll());

// ///////////problem 6////
// var up = [1, 3];
// var bottom = [3, 1];
// var right = [2];
// var left = [3];
// var y = +1 - 3 + 3 - 1;
// var x = +2 - 3;
// var cordinate = (0, 0);
// function position(x, y) {
//   for (i = 0; i < cordinate.length; ) {
//     if (up >= bottom && right >= left) {
//     }
//   }
//   return false;
// }
// console.log(position(0, 0));

///////////////////////////////fundamental basic////////////////

// 1. Print it using Cout statement.
// console.log(
//   "My-------------------------------Name------------ ----------------- Is------------- (your name)"
// );

// 2. Write a c program to print following shape(without loops).
// console.log("                *");
// console.log("               ***");
// console.log("              *****");
// console.log("             *******");
// console.log("            *********");
// console.log("            *********");
// console.log("             *******");
// console.log("              *****");
// console.log("               ***");
// console.log("                *");

/////////////////3. Write a c program to print following shape(without loops).////////////

// console.log("               *");
// console.log("              ***");
// console.log("             *****");
// console.log("            *******");
// console.log("           *********");
// console.log("           *********");
// console.log("           *********");
// console.log("           ***   ***");
// console.log("           ***   ***");
// console.log("           ***   ***");
// console.log("           ***   ***");

// 5. Take a number and print its square.

// var x = 5;
// console.log(5 ** 2);

// 6. Take two numbers and print their sum.

// var x = 2;
// var y = 6;
// sum = x + y;
// console.log(sum);

// 7. Take a number from user and print it table
// Hint
// for (var i = 1; i <= 10; i++) console.log(i * 2);

// 8. Initialize two variables with 50 and 100 And print their values in this format
// Value of first variable is 50 and value of second variable is 100

// var x = 50;
// var y = 100;

// console.log(x, y);

// 9. Initialize variables as many as required and print the following. I have 10
// rupees and you have 20 rupees. So we have enough money for to buy a
// coffee.Yahooooo....

// var x = "I have 10 rupees and you have 20 rupees.";

// var y = "So we have enough money for to buy acoffee.Yahooooo...";
// console.log(x + y);

// 10. Take three inputs from user and divide first by second and divide answer by
// third input.

// var x = 10;
// var y = 2;
// var z = 40;
// a = x / y;
// let g = a / z;
// console.log(g);
