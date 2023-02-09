// //simple external javascript example
// function myFunction() {
// document.getElementById("demo").innerHTML = "My Name is Amisha";
// }

/*---------------------------------------------------------------------------------*/

//  display data using innerHTML
//<script>document.getElementById("demo").innerHTML = 5 + 6;</script>;

// <!-- display data using document.write
// <script>
// document.write(25 + 26);
// </script> -->

/*---------------------------------------------------------------------------------*/

// <!-- //display data using window.alert
// <script>
//   alert(15 + 16);
// </script>  -->

/*---------------------------------------------------------------------------------*/

//  <!-- display data using console.log
// <script>
//   console.log(55 + 16);
// </script>

// <!-- js Statements example
// <script>
//   let x, y, z; // Statement 1 x = 5; // Statement 2 y = 6; // Statement 3 z = x+
//   y; // Statement 4 document.getElementById("demo").innerHTML = "The value of z
//   is " + z + ".";
// </script> -->

/*---------------------------------------------------------------------------------*/

// <!-- js syntax example
// // How to create variables:
// var x;
// let y;

// // How to use variables:
// x = 1;
// y = 2;
// let z = x + y; -->

/*---------------------------------------------------------------------------------*/

// <-- example of data types numbers and strings
// <p>Strings are written with quotes.</p>
// <p>Numbers are written without quotes.</p>
// <p id="demo"></p>
// <script>
// const pi = 3.14;
// let person = "Shah Shruti";
// let answer = 'Yes I am!';
// document.getElementById("demo").innerHTML =
// pi + "<br>" + person + "<br>" + answer;
// </script> -->

/*---------------------------------------------------------------------------------*/

// <-- You can declare many variables in one statement.
// <script>
//   let person = "Amisha Shah", carName = "Eco Sport", price = 1500000;
//   document.getElementById("demo").innerHTML = carName;
// </script>; -->

/*---------------------------------------------------------------------------------*/

// <-- Redeclaring a Variable Using var
// <p id="demo"></p>
// <script>
// var  x = 10;
// // Here x is 10
// {
// var x = 20;
// // Here x is 20
// }
// // Here x is 20
// document.getElementById("demo").innerHTML = x;
// </script>
//(output will be 20(means last declare variable will be output))-->

/*---------------------------------------------------------------------------------*/

// <-- Redeclaring a Variable Using let
// <p id="demo"></p>
// <script>
// let  x = 10;
// // Here x is 10
// {
//   let x = 20;
//   // Here x is 20
// }
// // Here x is 10
// document.getElementById("demo").innerHTML = x;
// </script>
// -->
// (output will be 10(means first declare variable will be output))-->

/*---------------------------------------------------------------------------------*/
// <-- Declaring a constant array does NOT make the elements unchangeable:

// <p id="demo"></p>
// <script>
// // Create an Array:
// const cars = ["ford", "Verna", "Swift"];
// // Change an element:
// cars[0] = "Ecosport";
// // Add an element:
// cars.push("Audi");
// // Display the Array:
// document.getElementById("demo").innerHTML = cars;
// </script> -->

/*---------------------------------------------------------------------------------*/

// <-- Declaring a constant object does NOT make the objects properties unchangeable:</p>

// <p id="demo"></p>

// <script>
// // Create an object:
// const car = {type:"Ford", model:"500", color:"white"};

// // Change a property:
// car.color = "black";

// // Add a property:
// car.owner = "Amisha";

// // Display the property:
// document.getElementById("demo").innerHTML = "Car owner is " + car.owner;
// </script>
// -->

/*---------------------------------------------------------------------------------*/

// <-- With const, you cannot use a variable before it is declared:
// <p id="demo"></p>

// <script>

// try {
//   alert(carName);
//   const carName = "Volvo";
// }
// catch (err) {
//   document.getElementById("demo").innerHTML = err;
// }
// </script> -->(output:ReferenceError: Cannot access 'carName' before initialization)

/*---------------------------------------------------------------------------------*/
// <-- JavaScript Arithmetic + operator example:
// <script>
//   let x = 5; let y = 2; let z = x + y; document.getElementById("demo").innerHTML
//   = z;
// </script>;
// -->

// <--Adding JavaScript Strings
// The += assignment operator can also be used to add (concatenate) strings:
//  <script>
// let text1 = "What a very ";
// text1 += "nice day";
// document.getElementById("demo").innerHTML = text1;
// </script> -->

// <-- Adding Strings and Numbers
// Adding two numbers, will return the sum, but adding a number and a string will return a string:
// <script>
// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;
// document.getElementById("demo").innerHTML =
// x + "<br>" + y + "<br>" + z;
// </script>
// output:10
// 55
// Hello5 -->

// <--The exponentiation operator (**) raises the first operand to the power of the second operand.
// <script>
// let x = 5;
//document.getElementById("demo").innerHTML = x ** 2;
// </script>
// Output: 25-->

// <-- 	Arithmetic Operator
//       Addition(+).. Substraction(-).. Multiplication(*).. 	Exponentiation (**)
//       Division(/).. 	Modulus (Division Remainder)(%)... 	Increment(++).. 	Decrement(--)
//  -->

/*---------------------------------------------------------------------------------*/

// <-- Assignment Operator
//     =    +=  -=   *=   /=   %=  **=
// -->
// <-- Comparison Operators
//     eual to(==)   equal value and equal type(===)      not equal(!=)
//     not equal value or not equal type(!==)    greater than(>)
//     less than(<)      greater than or equal to(>==)
//     less than or equal to(<==)     ternary operator(?)</>
// -->

/*---------------------------------------------------------------------------------*/

// <-- Logical Operators
//     logical and (&&)      	logical or(||)      logical not(!)
// -->

/*---------------------------------------------------------------------------------*/
// <-- Bitwise Operators
// AND (&) ...    OR(|)...   NOT(~)...   XOR(^) ...
// left shift(<<)..    right shift(>>)...   unsigned right shift(>>>)
//  -->
/*---------------------------------------------------------------------------------*/

//(1)<-- let x = 16 + 4 + "Volvo";
// document.getElementById("demo").innerHTML = x;
// Output: 20Volvo -->

//(2) <-- let x = "Volvo" + 16 + 4;
// document.getElementById("demo").innerHTML = x;
// Output: Volvo164; -->

//In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
//In the second example, since the first operand is a string, all operands are treated as strings.
/*---------------------------------------------------------------------------------*/
{
  /*JavaScript has 8 Datatypes
1. String      2. Number    3. Bigint   4. Boolean
5. Undefined   6. Null      7. Symbol   8. Object

The Object Datatype
The object data type can contain:
1. An object    2. An array   3. A date */
}

//Examples:
{
  /* // Numbers:(Numbers can be written with, or without decimals:)
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25"); */
}

/*---------------------------------------------------------------------------------*/
// <-- JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
// let x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String
// document.getElementById("demo").innerHTML = x;
// Output: John
// -->

/*---------------------------------------------------------------------------------*/
// <-- Exponential Notation
// let y = 123e5;
// let z = 123e-5;

// document.getElementById("demo").innerHTML = y + "<br>" + z;
// Output: 12300000
// 0.00123 -->

/*---------------------------------------------------------------------------------*/

// <-- JavaScript BigInt

// let x = BigInt("123456789012345678901234567890");
// document.getElementById("demo").innerHTML = x;
// Output: 123456789012345678901234567890; -->

/*---------------------------------------------------------------------------------*/

//<-- JavaScript Booleans(Booleans can only have two values: true or false.)

// let x = 5;
// let y = 5;
// let z = 6;

// document.getElementById("demo").innerHTML = (x == y) + "<br>" + (x == z); -->

/*---------------------------------------------------------------------------------*/

// <-- JavaScript Arrays (written with square brackets, Array items are separated by commas)
// const cars = ["Saab", "Volvo", "BMW"];

// document.getElementById("demo").innerHTML = cars[0];
// output: Saab -->>

/*---------------------------------------------------------------------------------*/

// <-- JavaScript Objects(JavaScript objects are written with curly braces {}.
//     Object properties are written as name:value pairs, separated by commas.)
// const person = {
//   firstName: "Amisha",
//   lastName: "Shah",
//   age: 23,
//   eyeColor: "brown",
// };

// document.getElementById("demo").innerHTML =
//   person.firstName + " is " + person.age + " years old.";
// Output: Amisha is 23 years old. -->

/*---------------------------------------------------------------------------------*/

// <-- The typeof Operator(The typeof operator returns the type of a variable or an expression:)
// document.getElementById("demo").innerHTML =
//   typeof "" + "<br>" + typeof "Ami" + "<br>" + typeof "Ami Shah"; -->

/*---------------------------------------------------------------------------------*/
// <-- undefined(a variable without a value, has the value undefined. The type is also undefined.)
// let car;
// document.getElementById("demo").innerHTML = car + "<br>" + typeof car; -->

/*---------------------------------------------------------------------------------*/

// <-- Empty Values(An empty value has nothing to do with undefined.)
// let car = "";
// document.getElementById("demo").innerHTML =
//   "The value is: " + car + "<br>" + "The type is: " + typeof car; -->

/*---------------------------------------------------------------------------------*/

// <-- JavaScript Function (A JavaScript function is a block of code designed to perform a particular task)

// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// document.getElementById("demo").innerHTML = myFunction(4, 3);
// Output: 12 -->

/*---------------------------------------------------------------------------------*/
