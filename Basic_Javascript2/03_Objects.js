// Singleton
//Object.Create


//Object Literals

const mySym = Symbol('key1')

const JsUser = {
    name: 'Veeresh',
    'full name': 'Veeresh Hiremath',
    [mySym] : "myKey1",
    age:18,
    Location: "Bengaluru",
    email: 'Veereshmh407@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(JsUser[mySym]);

JsUser.email = "Veereshmh8@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Veeresh@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello Js User');
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





