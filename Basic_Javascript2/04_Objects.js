// const tinderUser = new Object() // Singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = 'Veeresh'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regaularUser = {
    email: 'Some@gmail.com',
    fullname: {
        userfullname:{
            firstname: 'Veeresh',
            lastname: 'Hiremath'
        }
    }
}
//console.log(regaularUser.fullname.userfullname.firstname);

// Object Merge

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = { obj1, obj2 }

const obj3 = Object.assign(obj1, obj2)

console.log(obj3);
