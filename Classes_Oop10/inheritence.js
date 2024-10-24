class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email
        this.password = password
    }

    addCourse(){
        console.log(`A New Course added by ${this.username}`);
        
    }
}

const chai = new Teacher('Chai', 'chai@gmail.com', '123')
chai.addCourse()
const masalachai = new User("MasalaChai")
console.log(chai);
masalachai.logMe();
