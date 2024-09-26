// if 


// = single Equal id assignment operator
// == Comparision the value
// === check the data type of value

// const isUserLoggedIn = true
// const temprature = 51

// if(temprature < 50){
//     console.log("temprature is less than 50");    
// }else {
//     console.log("temprature is greater than 50")
// }


// const score = 200

// if(score > 100){
//     var power = "fly"
//     console.log(`User Power ${power}`);
// }
// console.log(`User power ${power}`);

const balance = 1000 
//  if(balance > 500) console.log("Test");  

// Nesting

if (balance < 500){
    console.log("less than 500");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log(`Balance is less than 1200 your current balance is ${balance}`);
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Loggged In");
}