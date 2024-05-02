let score = 33

console.log(typeof score);
console.log(typeof(score));   


let valueInNumber  = Number(score)

console.log(typeof valueInNumber);

// if define a variable like "33abc" and convet to a number
// output will be NaN means not a number
// Number(score) it converts a string to a number but theres no number
// means change datatype

// let score = 33
// let score = "33abc"
// let score = null   // output is 0
// let score = undefined   // output is NaN
let isloggedin = 1
let bool = Boolean(isloggedin)
console.log(bool)

//1 => true; 0 => false
// "" => false
// "hitesh" => true


