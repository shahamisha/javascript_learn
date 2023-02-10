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

// <-- Local Variables(Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.)

// myFunction();

// function myFunction() {
//   let carName = "Eco";
//   document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
// }

// document.getElementById("demo2").innerHTML = typeof carName;
// Output: string Volvo
// undefined -->

/*---------------------------------------------------------------------------------*/
// <-- JavaScript Objects (Objects are variables too. The values are written as name:value pairs )
// // Create an object:
// const car = { type: "Fiat", model: "500", color: "white" };

// // Display some data from the object:
// document.getElementById("demo").innerHTML = "The car type is " + car.type;
// Output: The car type is Fiat -->

/*---------------------------------------------------------------------------------*/

// <-- Accessing Object Properties(You can access object properties in two ways:
//     (1)objectName.propertyName   (2objectName["propertyName"])

// // Create an object:
// const person = {
//   firstName: "Shruti",
//   lastName : "Shah",
//   id     :  111
// };

// // Display some data from the object:
// document.getElementById("demo").innerHTML =
// person.firstName + " " + person.lastName;

// Output: Shruti Shah -->

/*---------------------------------------------------------------------------------*/

//<-- Accessing Object Methods(object method with the following syntax objectName.methodName())

// // Create an object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// // Display data from the object:
// document.getElementById("demo").innerHTML = person.fullName();
//  Output: John Doe -->

/*---------------------------------------------------------------------------------*/

// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
// x = new String();        // Declares x as a String object
// y = new Number();        // Declares y as a Number object
// z = new Boolean();       // Declares z as a Boolean object
// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

/*---------------------------------------------------------------------------------*/

//  {/* <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
// in above example, the JavaScript code changes the content of the element with id="demo" */}

// JavaScript HTML Events
// {/* <button onclick="this.innerHTML=Date()">The time is?</button>
//  In this example, the code changes the content of its own element (using this.innerHTML):*/}

//Click the button to display the date.
// {
//   /*
// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
//  }*/
// }

/*---------------------------------------------------------------------------------*/

// //<-- JavaScript Strings(You can use single or double quotes:)
// let carName1 = "Volvo XC60"; // Double quotes
// let carName2 = "Volvo XC60"; // Single quotes

// document.getElementById("demo").innerHTML = carName1 + " " + carName2; -->

/*---------------------------------------------------------------------------------*/

// //<-- String Length (To find the length of a string,)

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length; -->

/*---------------------------------------------------------------------------------*/

// Escape Character(Because strings must be written within quotes, JavaScript will misunderstand this string:)

// (1)\'	'	Single quote
// (2)\"	"	Double quote
// (3)\\	\	Backslash

// Example:
// let text = "We are the so-called \"Vikings\" from the north.";
// document.getElementById("demo").innerHTML = text;

// Output: We are the so-called "Vikings" from the north.

// Six other escape sequences are valid in JavaScript:
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

/*---------------------------------------------------------------------------------*/

// JavaScript Strings as Objects(strings can also be defined as objects with the keyword new:)
// // x is a string
// let x = "John";

// // y is an object
// let y = new String("John");

// document.getElementById("demo").innerHTML =
// typeof x + "<br>" + typeof y;
// Output: string
// object

/*---------------------------------------------------------------------------------*/

// JavaScript String Methods

//(1) String length
//(2) String slice()
//(3)String substring()
//(4) String substr()
//(5)String replace()
//(6)String replaceAll()
//(7)String toUpperCase()
//(8)String toLowerCase()
//(9)String concat()
//(10) String trim()
//(11)String trimStart()
//(12)String trimEnd()
//(13)String padStart()
//(14)String padEnd()
//(15)String charAt()
//(16)String charCodeAt()
//(17)String split()

/*---------------------------------------------------------------------------------*/

// (1)JavaScript String Length(The length property returns the length of a string:)

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length;
// Output: 26
/*---------------------------------------------------------------------------------*/

// Extracting String Parts(There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
// )

//<--(2)JavaScript String slice() :(slice() extracts a part of a string and returns the extracted part in a new string)
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// document.getElementById("demo").innerHTML = part;
// Output: Banana;

// If you omit the second parameter, the method will slice out the rest of the string:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7)
// document.getElementById("demo").innerHTML = part;
// Output:Banana, Kiwi

//If a parameter is negative, the position is counted from the end of the string:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// document.getElementById("demo").innerHTML = part;

/*---------------------------------------------------------------------------------*/

// (3)JavaScript String substring() (substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring())

// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(7,13);
// Output: Banana

/*---------------------------------------------------------------------------------*/

// (4)JavaScript String substr()
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substr(7,6);
// Output: Banana

/*---------------------------------------------------------------------------------*/

//(5)Replacing String Content (The replace() method replaces a specified value with another value in a string:)
{
  /* <button onclick="myFunction()">Try it</button>;(aa html file am mukvanu)
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.replace("Amisha", "Shruti");
} */
}

// By default, the replace() method replaces only the first match:
{
  /*<button onclick="myFunction()">Try it</button>
<p id="demo">Please visit Microsoft and Microsoft!</p>

function myFunction() {
  let text = document.getElementById("demo").innerHTML; 
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");
}
Output:Please visit W3Schools and Microsoft!
*/
}

//Note:Regular expressions are written without quotes.

//To replace all matches, use a regular expression with a /g flag (global match):
{
  /*<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft and Microsoft!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML; 
  document.getElementById("demo").innerHTML =
  text.replace(/Microsoft/g,"W3Schools");
}
*/
}
/*---------------------------------------------------------------------------------*/

// (6)JavaScript String ReplaceAll()
{
  /*let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

document.getElementById("demo").innerHTML = text;

Output: I love dogs. Dogs are very easy to love. Dogs are very popular. */
}

//To replace all matches, use a regular expression with a /g flag (global match):
{
  /*let text = "I love cats. Cats are very easy to love. Cats are very popular";
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");

document.getElementById("demo").innerHTML = text;
Output:I love dogs. Dogs are very easy to love. Dogs are very popular */
}
/*---------------------------------------------------------------------------------*/

//(7) JavaScript String toUpperCase()
{
  /*<button onclick="myFunction()">Try it</button>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.toUpperCase();
}
Output:MY NAME IS AMISHA */
}

/*---------------------------------------------------------------------------------*/

//(8) JavaScript String toLowerCase()

{
  /*
  <button onclick="myFunction()">Try it</button>
  function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.toLowerCase();
}
Output: my name is amisha*/
}
/*---------------------------------------------------------------------------------*/

//(9) JavaScript String concat()   :(concat() joins two or more strings:)
{
  /*let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ", text2);
document.getElementById("demo").innerHTML = text3;*/
}

//The concat() method can be used instead of the plus operator. These two lines do the same:
{
  /*text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");*/
}

/*---------------------------------------------------------------------------------*/
//(10) JavaScript String trim()  :(The trim() method removes whitespace from both sides of a string:)

{
  /*let text1 = "     Hello World!     ";
let text2 = text1.trim();

document.getElementById("demo").innerHTML =
  "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
 Output: Length text1 = 22
Length text2 = 12 */
}

/*---------------------------------------------------------------------------------*/

//(11) JavaScript String trimStart()  :(The trimStart() method works like trim(), but removes whitespace only from the start of a string.)

{
  /* let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
Output:Length text1 = 22
Length text2 = 17 */
}

/*---------------------------------------------------------------------------------*/

//(12) JavaScript String trimEnd()  :(The trimEnd() method works like trim(), but removes whitespace only from the end of a string.)

{
  /*let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

Outpiut: Length text1 = 22
Length text2 = 17
*/
}

/*---------------------------------------------------------------------------------*/
//(13) JavaScript String Padding : (The padStart() method pads a string with another string:)

{
  /* let text = "5";
text = text.padStart(3, "0");

document.getElementById("demo").innerHTML = text;
Output: 005; */
}

//Note: The padStart() method is a string method.
//      To pad a number, convert the number to a string first.
// Example:
{
  /*let numb = 5;
let text = numb.toString();
document.getElementById("demo").innerHTML = text.padStart(4, 0); */
}

/*---------------------------------------------------------------------------------*/

//(14) JavaScript String padEnd()  :(The padEnd() method pads a string with another string:)

{
  /*let text = "5";
document.getElementById("demo").innerHTML = text.padEnd(4, "x");
Output: 5xxx */
}

//Note: The padEnd() method is a string method.
//To pad a number, convert the number to a string first.
// Example:

{
  /* let numb = 5;
let text = numb.toString();
document.getElementById("demo").innerHTML = text.padEnd(4, "x");
Output:5xxx */
}

/*------------------------------------------------------------------------------------------------------------------------------*/
// Extracting String Characters
// There are 3 methods for extracting string characters:
// (a)charAt(position)
// (b)charCodeAt(position)
// (c)Property access [ ]

//(15)(a) JavaScript String charAt()  :The charAt() method returns the character at a specified index (position) in a string:
{
  /* var text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charAt(0); 
Output: H
*/
}

//(16)(b) JavaScript String charCodeAt()  :The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).

{
  /* let text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charCodeAt(0);
Output: 72; */
}

//(17)(c)Property Access  :ECMAScript 5 (2009) allows property access [ ] on strings:

{
  /* var str = "HELLO WORLD";
document.getElementById("demo").innerHTML = str[0];
Output: H; */
}

// Note:Property access might be a little unpredictable:
// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!

//Example:
{
  /*let text = "HELLO WORLD";
text[0] = "A"; // Does not work
document.getElementById("demo").innerHTML = text;
Output: HELLO WORLD*/
}

/*------------------------------------------------------------------------------------------------------------------------------------*/
//(18) JavaScript String split()  :A string can be converted to an array with the split() method:

{
  /*let text = "a,b,c,d,e,f";
const myArray = text.split(",");
document.getElementById("demo").innerHTML = myArray[0];
*/
}

//If the separator is "", the returned array will be an array of single characters:
//Example:
{
  /* let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
Output:
H;
e;
l;
l;
o; */
}
/*---------------------------------------------------------------------------------*/

//JavaScript String Search
{
  /*JavaScript Search Methods
(1)String indexOf()
(2)String lastIndexOf()
(3)String search()
(4)String match()
(5)String matchAll()
(6)String includes()
(7)String startsWith()
(8)String endsWith() */
}

//(1)JavaScript String indexOf() : The indexOf() method returns the index of (position of) the first occurrence of a string in a string:
{
  /* let text = "Please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = text.indexOf("locate"); */
  //Output: 7
}
//JavaScript counts positions from zero.

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// (2) JavaScript String lastIndexOf()  : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

{
  /* let text = "Please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = text.lastIndexOf("locate");
Output: 21 */
}

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
{
  /*let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("John");
Output: -1; */
}

//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
{
  /* let text = "Please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = text.lastIndexOf("locate", 15);
Output: 7 */
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
// (3) JavaScript String search() :The search() method searches a string for a string (or a regular expression) and returns the position of the match:
{
  /*let text = "Please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = text.search("locate");
// or 
let str = "Please locate where 'locate' occurs!";
str.search(/locate/);
Output : 7*/
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//(4)JavaScript String match() : The match() method returns an array containing the results of matching a string against a string (or a regular expression).

{
  /* let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain");
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
//or
let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match(/ain/);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
Output: 1 ain */
}

//Perform a global search for "ain":
{
  /* let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match(/ain/g);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
Output: 3 ain,ain,ain
*/
}

//Perform a global, case-insensitive search for "ain":
{
  /* let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match(/ain/gi);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
Output: 4 ain,AIN,ain,ain */
}

//Note:  If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//(5)JavaScript String matchAll() : The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
{
  /* let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
document.getElementById("demo").innerHTML = Array.from(iterator);
Output: Cats,Cats */
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//(6)JavaScript String includes() : The includes() method returns true if a string contains a specified value. Otherwise it returns false.
//includes() is case sensitive.
{
  /* let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.includes("world");
Output: true */
}

//Check if a string includes "world". Start at position 12:
{
  /*let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.includes("world", 12); 
Output:false  */
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//(7) JavaScript String startsWith() : The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
//startsWith() is case sensitive
{
  /*let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.startsWith("Hello");
Output: true; */
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//(8) JavaScript String endsWith() : The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
//endsWith() is case sensitive.
{
  /*let text = "John Doe";
document.getElementById("demo").innerHTML = text.endsWith("Doe");
Output: true */
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//JavaScript Template Literals
// Synonyms:
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax

//Back-Tics Syntax :  (Template Literals use back-ticks (``) rather than the quotes ("") to define a string:)
{
  /*let text = `Hello world!`;
document.getElementById("demo").innerHTML = text;
Output: Hello world! */
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//HTML Templates

{
  /*let header = "Subjects";
let tags = ["css", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
Output: Subjects
css
javascript
es6 */
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Quotes Inside Strings : (With template literals, you can use both single and double quotes inside a string:)
{
  /* let text = `He's often called "Johnny"`;
document.getElementById("demo").innerHTML = text;
Output: He's often called "Johnny" */
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//JavaScript Numbers : JavaScript has only one type of number. Numbers can be written with or without decimals.
{
  /*let x = 3.14;
let y = 3;
document.getElementById("demo").innerHTML = x + "<br>" + y;
Output: 3.14;
3;*/
}

//Extra large or extra small numbers can be written with scientific (exponent) notation:
{
  /*let x = 123e5;
let y = 123e-5;
document.getElementById("demo").innerHTML = x + "<br>" + y;
Output: 12300000;
0.00123; */
}

/*---------------------------------------------------------------------------------*/

//Adding Numbers and Strings
//Notes: JavaScript uses the + operator for both addition and concatenation.Numbers are added. Strings are concatenated.

//If you add two numbers, the result will be a number:
{
  /*let x = 10;
let y = 20;
let z = x + y;
document.getElementById("demo").innerHTML = z;
Output: 30; */
}

//If you add two strings, the result will be a string concatenation:
{
  /*let x = "10";
let y = "20";
let z = x + y;
document.getElementById("demo").innerHTML = z;
Output: 1020 */
}

/*---------------------------------------------------------------------------------*/

//Numeric Strings : 
//JavaScript strings can have numeric content:
//Example:let x = 100;         // x is a number
//let y = "100";       // y is a string

//JavaScript will try to convert strings to numbers in all numeric operations:
//This will work:
{/*let x = "100";
let y = "10";
let z = x / y;   
document.getElementById("demo").innerHTML = z;
Output: 10; */}

//This will work:
{/*let x = "100";
let y = "10";
let z = x * y;
document.getElementById("demo").innerHTML = z;
Output:1000*/}

//This will work:
{/* let x = "100";
let y = "10";
let z = x / y;
document.getElementById("demo").innerHTML = z;
Output: 10 */}

//This will work:
{/* let x = "100";
let y = "10";
let z = x - y;
document.getElementById("demo").innerHTML = z;
Output: 90 */}

//But this will not work:
{/* let x = "100";
let y = "10";
let z = x + y;   
document.getElementById("demo").innerHTML = z;
Output: 10010}
//In the this last example JavaScript uses the + operator to concatenate the strings.

/*---------------------------------------------------------------------------------*/

//Infinity : Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

{/*let myNumber = 2; 
let txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("demo").innerHTML = txt;
Output: 4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity */}

/*---------------------------------------------------------------------------------*/

//Hexadecimal
//JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
{/* let x = 0xFF;
document.getElementById("demo").innerHTML = "0xFF = " + x;
Output: 0xFF = 255 */}

//By default, JavaScript displays numbers as base 10 decimals.
//But you can use the toString() method to output numbers from base 2 to base 36.
//Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
{/* let myNumber = 32;
document.getElementById("demo").innerHTML =
"Decimal 32 = " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);
Output: Decimal 32 =
Hexatrigesimal (base 36): w
Duotrigesimal (base 32): 10
Hexadecimal (base 16): 20
Duodecimal (base 12): 28
Decimal (base 10): 32
Octal (base 8): 40
Binary (base 2): 100000 */}

//JavaScript Numbers as Objects
{/* Normally JavaScript numbers are primitive values created from literals:
let x =123;

But numbers can also be defined as objects with the keyword new:
let y = new Number(123);

//Example:
// x is a number
let x = 123;

// y is a Number object
let y = new Number(123);

document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;
Output: number
object */}

//Note: Do not create Number objects.
//The new keyword complicates the code and slows down execution speed.

//When using the == operator, x and y are equal:
{/*// x is a number
let x = 500;
// y is an object
let y = new Number(500);
document.getElementById("demo").innerHTML = (x==y);
Output: true */}


//When using the === operator, x and y are not equal.
{/* // x is a number
let x = 500;
// y is an object
let y = new Number(500);
document.getElementById("demo").innerHTML = (x===y);
Output: false */}

//Note: Comparing two JavaScript objects always returns false.