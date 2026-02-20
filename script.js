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


//  const firstName = "Edison"
//  const lastName = "Sime"



// concatenation

//  const fullName = `Hello i am ${firstName}, ${lastName}`

//  const fullName = " Hello i am " + firstName + " " + lastName
// console.log(fullName)


// numbers
// int -
// float (decimal)

//  const number =  2;
//  const decimal = 2.267747;
//  console.log(typeof(decimal))
//  console.log(typeof(parseFloat(decimal)))
//  console.log(typeof(number))
//  console.log(typeof(parseInt(number)))+
//  console.log(typeof(decimal.toFixed(1)))
//  console.log(typeof(toString(number)))

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

//  const length = 20;
//  const width = 10;

//  const area = length * width
//  console.log(`The area of a circle is ${area}`)

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

// let Age = "18";
// const age = parseInt(Age)
// if (age === 18) {
//     console.log(`You are Up ${age} and you are an adult`)  
// }else if (age >= 18) {
//      console.log(`Your ${age}, you are not an adult`)  
// } else {
//      console.log(`You do not have any age`)  
// }

// let score = "69.8"
// const scores = parseFloat(score) 
// console.log(typeof(scores.toFixed(0)))
// // console.log(scores)

// switch statement

// key- expression
// case - conditions
// break- its means once that line code is executed stop the code.
// default- 

// write a program that indicates days of the week.
// mondays - sundays

// let days = "holiday"

// switch (days, age) {
//      case "Monday" : console.log("This is Monday")
//           break; 
//      case "Tuesday": console.log("This is Tuesday")
//           break;
//     case "Wednesday": console.log("This is Wednesday")
//           break;
//      case "Thursday": console.log("This is Thursday")
//           break;
//      case "Friday": console.log("This is Friday")
//           break;
//      case "Saturday": console.log("This is Saturday")
//           break;
//      case "Sunday": console.log("This is Sunday")
//           break;
//      default: console.log("None of the day is found")
//           break;
// }



// loops in javascript
// for loop
// while loop

// for ( initialization, condition, increment)
// write a program that counts 1-10
// increment ++, +2
//decrement--
 
// 1 - 1 + 1 = 2, 2+1= 3, 4,5,6,7,8,9,10

// for (let count = 1; count <= 10; count++) {
//  console.log(count)
// }
// // write a program thats print Hello world ten times
// for(let print = 1; print <= 10; print++){
//     console.log(`Hello World ${print}`)
// }

// while loop

// let count = 1;
// while (count <= 10) {
//      console.log(count)
//      count++
// }

// scope in javascript
// local variable
// global variable

// Arrays 
// Arrays- are collection of data.

// const ArrayName = []
// list fruits 





// console.log(fruits.length)
// console.log(fruits[2])

const mixArray = ["Strings", 1, true, ['text', 2], {name:'bob'}]
console.log(mixArray[0])
console.log(mixArray[3][1])
console.log(mixArray[4].name)




// Arrays of Method
const fruits = ["mango", "orange", "Apple", "grape"]

//push() - its used to add one or more  elements to END  of an array

fruits.push("banana")
console.log(fruits)

// pop() -Removes the last element from an array and returns that element.
 
fruits.pop()
console.log(fruits)

// shift()- Removes the first element from an array and returns that element.
fruits.shift()
console.log(fruits)
//unshift()- Inserts new elements at the start of an array, and returns the new length of the array.
fruits.unshift("berry")
console.log(fruits)
// indexof

console.log(fruits.indexOf("berry"))
//length

console.log(fruits.length)
// join()
console.log(fruits.join("-"))

// sort()
  console.log(fruits.sort())
// reverse()

console.log(fruits.reverse())
//concate
console.log(fruits.concat(mixArray))

// const numbers = [,2,3,4,5,7,9,10,50]
// numbers.unshift(1,6,8)
// numbers.pop()
// numbers.sort()
// console.log(numbers)

// 0bject in javascript
// object- The JavaScript object is a non-primitive data type that is used to store data as key-value pairs. The key-value pairs are often referred as properties. A key in a key-value pair, also called a "property name", is a string and value can be anything. If a property's value is a function, the property is known as a method.

// Objects are created using curly braces and each property is separated by a comma. Each property is written as property name followed by colon (:) followed by property value. The key: value pairs are not stored in the specific order in the object. So an object is an unordered collection of properties written as key: value pairs.

  const students = { 
   name:"Edison",
   age:9,
   isstudent:true,
   subjects:['math', 'Eng', 'chem'],
  
}

//  object methods

//Access each property in an object
console.log(students.name)
console.log(students.subjects[1])

// add to an object 
students.gender = "male"
console.log(students)

// edit 
students.age = 10
console.log(students)

// delete or remove
 delete students.age
 console.log(students)


// StudentArray = [
//   {
//     name:"Alice",
//     gender:"female",
//     age:9,
//     isstudent:true
//   }, 
//   {
//     name:"Edy",
//     gender:"male",
//     age:10,
//     isstudent:true
//   }, 
//     {
//     name:"Amos",
//     gender:"male",
//     age:12,
//     isstudent:true
//   }, 
//   {
//     name:"sarah",
//     gender:"female",
//     age:14,
//     isstudent:true
//   }, 
//     {
//     name:"Edward",
//     gender:"male",
//     age:9,
//     isstudent:true
//   }, 
// ]

// loop                           0 <  5            +
// for (let names = 0; names < StudentArray.length; names++){
//   console.log(StudentArray[names].age)
// }

//  for (let names = 0; names < StudentArray.length; names++){
//   //  console.log(StudentArray[names].age)
//     if (StudentArray[names].name === "sarah" ) {
//   console.log(StudentArray[names])  
// }

// }


// StudentArray.push(
//    {
//     name:"love",
//     gender:"female",
//     age:11,
//     isstudent:true
//   }, 
// )

// console.log(StudentArray)


// for in
// for of
// object destructuring 
// array destructuring
// spread operator
// functions 


// const profile = {  for an object it loop through the keys 
//     name:"Edward",
//     gender:"male",
//     age:9,
//     isstudent:true
//   }

const profile = ['Edward', 'male'] // loop through using index number

// const dep = [{
//     name:"love",
//     gender:"female",
//     age:11,
//     isstudent:true
//   },
//   {
//     name:"love",
//     gender:"female",
//     age:11,
//     isstudent:true
//   },
//  ]

const dep = 'Edison' // string


for (const value in dep) {
  console.log(value,dep[value])
  
}


// for of loop is used to loop through the  values of an array, string

for (const values of dep) {
  console.log(values)
  
}

// object destructuring 

  const pupil= {
     name:"sarah",
    gender:"female",
    age:14,
    isstudent:true
  }

  // keys
  // const{name:firstName, gender, age, isstudent} = pupil

// values 
  //  const{name, gender, age, isstudent} = {name:"joe", gener:"male"}
  // console.log(name)
  
// spread operator ... cloning 
//  const{name, ...details} = pupil
//   console.log(name, details)

//  const{...details} = pupil
//   console.log(details)


