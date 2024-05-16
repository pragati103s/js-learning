//   Dates

let myDate = new Date()
// console.log(myDate);                                       //2024-05-15T05:22:39.185Z
// console.log(myDate.toString());                            //Wed May 15 2024 05:16:29 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());                        //Wed May 15 2024
// console.log(myDate.toISOString());                         //2024-05-15T05:16:29.257Z
// console.log(myDate.toLocaleDateString());                   //5/15/2024
// console.log(myDate.toLocaleString());           //5/15/2024, 5:16:29 AM
// console.log(myDate.toLocaleTimeString());  //5:16:29 AM
// console.log(myDate.toTimeString());        //05:16:29 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());///////////Wed, 15 May 2024 05:16:29 GMT
// console.log(myDate.getTimezoneOffset());    //0



// console.log(typeof myDate)
// let myreatedDate = new Date(2023,0, 23)
// // month start with zero 
// we can also insert time like this

// let myreatedDate = new Date(2023,0, 23, 5,3)
// let myreatedDate = new Date("2023-01-14")    // date formats
let myreatedDate = new Date("01-14-2023")    // date formats


// console.log(myreatedDate.toDateString());

//  timestamps
let myTimeStamps = Date.now()

console.log(myTimeStamps)
console.log(myreatedDate.getTime());
console.log(Date.now()   );       //it gives date in miliseconds




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})