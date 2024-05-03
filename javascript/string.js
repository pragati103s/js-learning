const name = "pragati"
const repo = 50

console.log(`Hello may name is ${name} and my repo is ${repo}` );
// this way is called string interpolation

const gameName = new String('raj')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const gameName1  = new String('raj-eev')
const newString = gameName1.substring(0, 4)
console.log(newString);

const str2 = gameName1.slice(-8,4)
console.log(str2)

const  triming = "pra     "
console.log(triming.trim())    // remove whitespaces only

const url = "https://rsac.com"

url.replace('.', '-')
console.log(url);
console.log(url.replace('.', '-'));


url.includes('raj')   //is this value presnt in string or not

const gameName12 = new String('raj-eev-sona')

console.log(gameName12.split('-'))