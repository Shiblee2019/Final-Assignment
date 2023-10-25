// Problem 1: Write a function to calculate the area of a triangle.

// function triangleArea(a, b, c){
//     let side = (a + b + c)/2;
//     let area = Math.sqrt(side*(side-a)*(side-b)*(side-c));
//     console.log(area);
// }

// triangleArea(5, 6, 7);


// Problem 2: Write a function to convert degrees to radians.

// function deg_to_radian(value) {
//     let radian = value * (Math.PI/180);
//     console.log(radian);
    
// }

// deg_to_radian(60)


// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

// function calculateFactorial(number) {
//     if (number === 0) {
//         return 1;
//     } else {
//         return calculateFactorial(number - 1) * number;
//     }
    
// }

// console.log(calculateFactorial(6));

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

// function isPrime(parameter) {
//     if (parameter == 1) {
//         return true;
//     } else {
//         return false;
//     }
    
// }

// console.log(isPrime(1));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

// function mergeArrays(merge){
//     console.log(merge);
// }

//  let arr1 = ["Rahim", "karim", "Sumon"];
//  let arr2 = ["Monir", "Emon", "Shuvo"];
//  let merge = arr1 + "," + arr2;
// //  console.log(merge);
// mergeArrays(arr1 + "," + arr2);

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

// function isLeapYear(x) {
//     if (x % 400 == 0 || (x % 4 == 0 && x % 100 !== 0)) {
//         return "This is a leap year";
//     } else {
//         return "Not Leap year";
//     }
// }

// console.log(isLeapYear(2023));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

// let arr = ["apple", "mango", "apple", 
//           "orange", "mango", "mango"]; 
  
// function removeDuplicates(arr) { 
//     return [...new Set(arr)]; 
// } 
  
// console.log(removeDuplicates(arr));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.


// function convertToCelsius(fahrenheit) {
//   let fahTemp = fahrenheit;
//   let fahToCel = (fahTemp - 32) * 5 / 9;
//   let convert = fahTemp + ' to ' + fahToCel;
//     return convert;
// } 
// console.log(convertToCelsius(-40));


// Problem 9: Write a function to find the maximum of five numbers.


// function max(num1, num2, num3, num4, num5) {
//     if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//         return num1;
//     }
//     if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//         return num2;
//     }
//     if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//         return num3;
//     }
//     if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//         return num4;
//     }
//     if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//         return num5;
//     } else{
//         return "minimum";
//     }
// }

// console.log(max(2,3,1,-4,-1));
// console.log(max(3,1,-4,-1,2));
// console.log(max(1,-4,-1,2,3));
// console.log(max(-4,-1,2,3,1));
// console.log(max(-1,2,3,1,-4));


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

// function evenOdd(a) {
//     let a = 2;
//     let totalNum = 10;
//     if (totalNum % a == 0) {
//         console.log(even);
//     } else {
//         console.log(odd);
//     }
// }

// evenOdd("javascript");



// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

// Answer: The difference between 'if....else' and 'switch' is given below:

//    ** 'if....else'
//    a. if...else condition evaluates all types of data such as Integer, floating, character, Boolean.

//    ** 'switch'
//    a. It works either and integer or character.

//    ** 'if-else'
//    b. Firstly, the condition is checked. If the condition is work then first condition is blocked. If the condition is not work then 'else' blocked.

//    ** 'switch'
//    b. if one case works then the break keyword is found and complete the function. if one case is not work then go to another case and check.



// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

// Answer: 
// Var: var can be Redeclared and updated.
// Example: 
// Var name = “Sojib”; //Declared
// Var name = “Sumon”; // Redeclared
// name = “Kamal”; //Updated

// Let: Let cannot be Redeclared and can be updated. 
// Example: 
// Let name = “Sojib”; //Declared
// Let name = “Sumon”; // cannot be Redeclared
// name = “Kamal”; //Updated

// Const: Const can neither be updated nor re-declared.
// Example: 
// const name = “Sojib”; //Declared
// const name = “Sumon”; // cannot be Redeclared
// name = “Kamal”; //cannot be Updated

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

// Scop: // Scoping is where I can access or use my declared variables/functions. If I want to make a variable or function private or if I want to access a variable from everywhere, how or where to declare it.

// Local Scope: Usually variables declared inside a function are local variables of that function. The scope of that of variables is local scope, that type of the variable can be accessed only inside the declared function. Cannot be accessed outside of it or in any other function.

// function localScope (){
// 	let scope = “This is the example of local scope.”;
// 	console.log(scope);
// }
// Console.log(scope); //this cannot be work.

// Global Scope: If a variable is not declared inside a function then it is a variable declared in global scope, meaning any variable declared anywhere outside the function gets global scope. They are also called global variables. Global variables can be accessed from within any function or from anywhere.

// Example:
// let globalVar = 'I am a Global Variable';

// function  globalScope() {
//    console.log (globalVar);
// }

// globalScope();

// console.log(globalVar);

// 5. What is the difference between "null" and "undefined" in JavaScript?

// Answer: 
// Null:
// In JavaScript, null means 'nothing'. It means that which has no existence. The data type of null is object.
// Example:
// let name = null;
// console.log(name);
// console.log(typeof name); // It seems to be null. But the typeof this is object.

// Undefined: in JavaScript, declaring a variable without a value. The output of this variable will be undefined. The value of typeof is also undefined.
// Example:
// Let name;
// console.log(name);
// console.log(typeof name); //Result is  undefined

