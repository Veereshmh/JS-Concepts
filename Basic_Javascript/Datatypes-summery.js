// Primitive Data Type

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567893456789n
 

// Reference (Non-Primitive)
// Arrays, Objects, Functions

const heros = ['Abc', 'Xyz', 'cde']

let myObj = {
    name: 'Veeresh',
    age: 34
}
const myFunction = function() {
    console.log("Hello World");
    
}
console.log(typeof bigNumber);
