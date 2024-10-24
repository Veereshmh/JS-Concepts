function SetUsername(username){
    // Complex DB Calls
    this.username = username
    console.log('called');
    
}

function createUSer(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUSer('Veeresh', 'Veereshmh407@gmail.com','123');
console.log(chai);
