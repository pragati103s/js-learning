var a =10;
const name = 'pragati'
let wish = 'hello'
console.log(wish);

// prefer not to use var
// becuase issue of block scope

// "use strict"
//  it is use as / treat as newe version
// now it is not written

//   alert(3+3)   // we are using node js not browser




// datatype
let n = "abc"  
let age = 20
let isloggedin = false

// number  => 2 to power 53
// bigint
// string = ""
// boolean => true/false
//  null  = it is a standalone value  empty value
// undefined =>  variable is declared but not defined or unassigned
// symbol  = unique 


// object

console.log(typeof("hello"));
console.log(typeof null);
//  it shows object, null is an object


// type of datatype


// Primitive 7 type, call by value
// String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
// output == false   because symbol make values uniques
 


// Non Primitive Reference
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,

}

const myFunction = function(){
    console.log("hello");
}

// typeof()   this is used to know datatype of any variable
// but for null it gives object
// function  gives  object function
// and all non primitive gives function

// Javascript is statically typed or dynamically typed  ??? 












// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack  (Primitive), Heap  (Non-Primitive)
// In stack we get only copy of value
//  but in non primitive, get original value

