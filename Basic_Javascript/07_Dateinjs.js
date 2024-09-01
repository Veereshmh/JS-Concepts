// Dates

let MyDate = new Date();
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleString());
console.log(typeof MyDate);

const myCreatedDate = new Date(2024, 1, 23);
const myCreatedDate1 = new Date(2024, 1, 23, 5, 3);
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate1.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));






