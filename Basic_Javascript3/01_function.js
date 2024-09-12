function sayMyName(){
    console.log('V');
    console.log('E');
    console.log('E');
    console.log('R');
    console.log('E');
    console.log('S');
    console.log('H');
    
}
// sayMyName : This is Reference
sayMyName() // This is execution


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function  addTwoNumbers(num1,num2){
    //let result = num1 + num2;
   // return result; // after retun nothing execute

   return num1 + num2;
//    console.log("Veeresh");
   
}
const result = addTwoNumbers(2, 1)

console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged In`
}

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged In`
}


// console.log(loginUserMessage("Veeresh"))
console.log(loginUserMessage("Veeresh"))