const myArr = [0,1,2,3,4,5,9,10,15,12]
// console.log(myArr);

myArr.push(6)
myArr.push(7)
myArr.pop()
// console.log(myArr);

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));    //it gives boolean result, if value exsist true else false
// console.log(myArr.indexOf(12));
// if value not exsist returns (-1) else index value

 

// console.log(myArr);

// const newArr = myArr.join()    //it converts array to string
// console.log(newArr);


// slice and splice
// console.log("A", myArr);

const myn1 = myArr.slice(1,5)
// console.log("B", myArr);
// console.log((myn1));   //it only copy from original array and not include last range

const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);   //it manipulate original array it cutdown from the range



// 2nd part
const marval_hero = ["thor", "itonman","spiderman" ]
const dc_heros = ["superman", "flash", "batman"]

// marval_hero.push(dc_heros)
// it creates array inside arrya
// array takes all datatype value
// console.log(marval_hero);

// to get value from inside array
// console.log(marval_hero[3][1]);

// push - add new values to existing array but concat add values and return new array

// const all_hero = marval_hero.concat(dc_heros)
// console.log(all_hero);

const all_new_heros = [...marval_hero, ...dc_heros]
// spread operatorr - it spread all values and return another arrya
// console.log(all_new_heros)

const another_arrya = [1, 2, 3, [4, 5, 6], 7, [6 ,7, [4, 5]]]     // complex arrya
const realarrya = another_arrya.flat(Infinity)    // infinity - it is depth ,till which depth to data flaten  
// flat is use to create complex or nested array  in simple array

console.log(another_arrya);

// ++++++++++++ to self study+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// isArray
// of
// from  
