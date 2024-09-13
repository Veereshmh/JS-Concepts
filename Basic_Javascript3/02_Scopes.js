// let a = 10;
// const b = 20;
// var c = 30;

let a = 300;
var c = 300 // Global scope
if(true){
    let a = 10;
const b = 20;  //// Block Scope
c = 30;

// console.log("Inner value of a:", a);

}

// console.log("Outer value of a:", a);
// console.log(b);
// console.log(c);


// Nested Scopes

function One ()
{
    const username = "Veeresh"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
}
// One()

if(true){
    const username = "Veeresh123"
    if(username === 'Veeresh123'){
        const website="google"
        // console.log(username + website);        
    }
    // console.log(website);
    
}
// console.log(username);
// ++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++  

console.log(addOne(5)) //  Cann access 'addOne' before initialization
function addOne(num){
    return num + 1
}

addTwo(5)  //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
 