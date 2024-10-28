class User{
    constructor(email, password){
        
        this.email = email;
        this.password = password
    }

    get password(){
        return this.password.toUpperCase();
    }
    set password() {
        
    }
    
}

const getset = new User("abc@abc.com", '12345');
console.log(getset.password);
