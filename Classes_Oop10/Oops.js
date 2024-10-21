const user = {
    username: 'Veeresh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user Details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }

}
console.log(user.username);
console.log(user.getUserDetails());


// Constructor Function

// const promiseOne = new Promise()
// const Date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}

const userOne = new User('Veeresh', 19, true)
const usertwo = new User('Mahesh', 11, true)

console.log(userOne);
console.log(usertwo);
