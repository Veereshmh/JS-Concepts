// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values

// "0", 'false', " ", [], {}, function(){}


const userEmail = []

if (userEmail){
    console.log("Got user email");    
} else {
    console.log("Dont have user email");    
}

//array in if condition

if (userEmail.length === 0) {
    console.log("Array is Empty");
    
}

// Object is empty

const emptObj = {}

if(Object.keys(emptObj).length === 0){
    console.log("Object is Empty");    
}


// Nullish Coalescing Operator (??) : null undefined

// const val1 = 5 ?? 10
// const val1 = undefined ?? 10
const val1 = null ?? 20 ?? 30

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");


