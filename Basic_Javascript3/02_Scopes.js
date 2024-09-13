// let a = 10;
// const b = 20;
// var c = 30;

let a = 300;
var c = 300 // Global scope
if(true){
    let a = 10;
const b = 20;  //// Block Scope
c = 30;

console.log("Inner value of a:", a);

}

console.log("Outer value of a:", a);
// console.log(b);
// console.log(c);
