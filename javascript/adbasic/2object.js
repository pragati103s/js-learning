// Object can be declare in two ways:
//      1. constructor (Singleton)
//      2. literal  (not Singleton)

/*note:  
Symbol 
const mySym = Symbol("Key1")
//to use in objects   define symbol as   [mySym]

*/ 

//   object literals
const mySym = Symbol("Key1")

const JsUser = {
    name: "Pragati",
    "full name": " raj singh",
    [mySym] : "key",
    age: 10,
    location: "India",
    email: "xyz@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

//  to access any object value, two ways:
//      1. JsUser.name
//      2. JsUser[name]    // using sq bracket we can access each kind of keys
//  e.g., if key is defined as  "full name"  or symbol [name]

// change values of object 
JsUser.email = "xyz@google.com"
// console.log(JsUser);

// not to change any value
// // Object.freeze(JsUser)
// JsUser.email = "xyz@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}
// when referencing same object, use this keyword 
JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
}

// console.log(JsUser.greeting);    //here function is not executed, only get reference of function
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




//++++++++++++++++++++ singleton or constructor++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const  tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "raj"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// objects define in ojects
const regUser = {
    email : "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "raj",
            lastname: "singh"
        }
    }
}

// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    1: "a",
    2: "b"
}
// how to combine objects in single object
// const obj3 = {obj1, obj2}     //it not give appropriate result
// const obj3 = Object.assign({}, obj1, obj2)    

const obj3  = { ... obj1, ... obj2}   //spreadoperator
// console.log(obj3);


// for database value
const user = [
    {
        id:1,
        name:" a"
    },
    {
        id:1,
        name:" a"
    },
    {
        id:1,
        name:" a"
    },
]

// console.log(user[1].name);


// console.log(tinderUser);

// to get all keys of an object and values
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// it is used to check having any property in the object
// console.log( tinderUser.hasOwnProperty('isLoggedIn'));



// ============= part 3  =========================================================================

// destructuring: for both array and objetcs
// here for objects

const course = {
    coursname : "js in hindi",
    price: "9999",
    courseInstructor: " raj"
}

// course.courseInstructor

// const { courseInstructor} = course
// console.log(courseInstructor);
const { courseInstructor: instructor} = course    //to change name or short, kind of alisaing
// console.log(instructor);

//=================== json =========================================

{
    "coursname" = "js in hindi",
    "price"= "9999",
    "courseInstructor"= " raj"
}