const name = 'Veeresh' // String Declaration
const repoCount = 50

console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);

// one more method String Declaration

const gameName = new String('Veeresh-mh-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Veeresh Hiremath    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.flipkart.com/mobile%20phones"
console.log(url.replace('%20', '-'));
console.log(url.includes('stores'))

console.log(gameName.split('-'));







