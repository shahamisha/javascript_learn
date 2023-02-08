// //simple external javascript example
// function myFunction() {
//   document.getElementById("demo").innerHTML = "My Name is Amisha";
// }

/*---------------------------------------------------------------------------------*/

// <!--  display data using innerHTML
//     <script>
//       document.getElementById("demo").innerHTML = 5 + 6;
//     </script> -->

// <!-- display data using document.write
// <script>
//   document.write(25 + 26);
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

/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------*/
