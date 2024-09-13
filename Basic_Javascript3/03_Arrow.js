const user = {
    username: "Veeresh",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);


// function Chai(){
//     console.log(this);
    
// }
// Chai()



// +++++++++ how to declare the function via arrow function

// const chai = function () {
//     let username = "Veeresh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Veeresh"
    console.log(this.username);
    console.log(this);
}


chai()


//pure arrow functions

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// Implicit return
//const addTwo = (num1, num2) =>   num1 + num2

//const addTwo = (num1, num2) =>   (num1 + num2)

const addTwo = (num1, num2) =>   ({username: 'veeresh'})

// curly braces we should return keyword
// if we added paranthesis we should not return keyword



console.log(addTwo(3, 4))