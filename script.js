// data types in javascript
// 1. string-  are just text   a. " "  double quote  .b ' ' single quote c. ` ` backslice
// "name", '9', `true`

// primitive data types

// 2. numbers- 1,2,3,4,5....  float- 1.2, 2.3......decimals

// 3. booleans- true / false

// 4. null - empty, intentionally empty

// 5. undefine- this means the either a value is not presented or the data type is not avaiable


// non- primitive data types
// 1. objects
// 2.Arrays
// 3.date


//  variables

// 1. let- this save a our data temporaraly and can be changed or redeclared

// let variable name = data type - value
// hoisting

//  let firstName = "Edison";
//   firstName = "David";
//  console.log(firstName);


//  let age = 9;
//   age = 10
//  console.log(age);



//  let ismale = true;
//  ismale = false
//  console.log(ismale)



// 2. const- this store our dataa permenantly and can not be change or redclared


// const firstName = "David";
// //   firstName = "David";
//  console.log(firstName);


//  const age = 10;
// //   age = 10
//  console.log(age);



//  const ismale = false;
// //  ismale = false
// //  console.log(ismale)

// string methods
// 1.toUpperCase()
// 2.toLowercase()
 // 3. length

//  let firstname = "david";
//  console.log(firstname.toUpperCase())
//  console.log(firstname.toLowerCase())
// console.log(firstname.length)

// assignment
// write  programe thats store, your firstname, lastname, age, gender, phone Number, email, and display all in the browser

// read up other strings method and number methods

// naming in javascript
// pascal case - FisrtName
// camel case - firstName
// snake case - first_name
// uppercases - FIRSTNAME
// lowercases - firstname


 const firstName = "Edison"
 const lastName = "Sime"



// concatenation

//  const fullName = `Hello i am ${firstName}, ${lastName}`

//  const fullName = " Hello i am " + firstName + " " + lastName
// console.log(fullName)


// numbers
// int -
// float (decimal)

 const number =  2;
 const decimal = 2.267747;
 console.log(typeof(decimal))
 console.log(typeof(parseFloat(decimal)))
 console.log(typeof(number))
 console.log(typeof(parseInt(number)))+
 console.log(typeof(decimal.toFixed(1)))
 console.log(typeof(toString(number)))

//  methods of number
// parseFloat()

// Parses the float value from the string.

// 6	
// parseInt()

// Parses the integer value from the string.
	
// toFixed()
// Formats a number with a specific number of digits to the right of the decimal.

// 	
// toString()

// Returns the string representation of the number's value.

// BODMAS- Bracket, order, division, mult, add, sub

// cal a area of a circle 

// area = length * width 

 const length = 20;
 const width = 10;

 const area = length * width
 console.log(`The area of a circle is ${area}`)

//  conditional statement
// if statement
// else if statement
// else
// switch statement


// conditional operator
// ==	Equal	x == y
// !=	Not Equal	x != y
// ===	Strict equality (equal value and equal type)	x === y
// !==	Strict inequality (not equal value or not equal type)	x !== y
// >	Greater than	x > y
// <	Less than	x < y<
// >=	Greater than or Equal to	x >= y
// <=	Less than or Equal to	x <= y


// i want create a program that  will check if someone is an adult or a teenager
// if is an adult
// if is a teenager
// not a human

let Age = "18";
const age = parseInt(Age)
if (age === 18) {
    console.log(`You are Up ${age} and you are an adult`)  
}else if (age >= 18) {
     console.log(`Your ${age}, you are not an adult`)  
} else {
     console.log(`You do not have any age`)  
}



















