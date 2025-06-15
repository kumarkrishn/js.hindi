// Premitive data types
// 7 types: String, Boolean, Number, BigInt, null, undefined, BigInt
const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail; // => undefined

let id = Symbol("123")
let anotherId = Symbol("123")

// console.log(id === anotherId)

const binNumber = 76767667567567576n

// Non Primitive type (Reference Type)

//  Array, Objects, Functions 

const myHeros = ["Shaktiman", "Marvel", "Captain America"]; // Array
const myObj = {
    name: "Krishna Prajapati",
    age: 26,
    emailId: "kk339052@gmail.com"
};
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof myHeros)