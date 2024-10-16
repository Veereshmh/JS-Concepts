const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
    
})

// promiseTwo
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 Resolved');
    
})

// PromiseThree
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Veeresh", email:"Veeresh@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// PromiseFour

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Veeresh", password: "1234"})
        } else {
            reject('Error: Something Went Wrong')
            
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username    
})
.then((username) => {
    console.log(username);    
})
.catch(function(error){
    console.log(error);    
}).finally(() => console.log('The Promise is either resolved or rejected'));

// promiseFive

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Javascript", password: "12345"})
        } else {
            reject('Error: JS Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }       
}

consumePromiseFive()

async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);
   } catch (error) {
    console.log("E:", error);
    
   }
    
}
getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
})
.catch((error => console.log('error')))

