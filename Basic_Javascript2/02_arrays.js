const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)


const concatarr = marvel_heroes.concat(dc_heroes)

console.log(concatarr);


const  all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);


const anotherArr = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_anotherArr =     anotherArr.flat(Infinity)
console.log(real_anotherArr);

console.log(Array.isArray('Veeresh'));
console.log(Array.from('Veeresh'));

console.log(Array.from({name: 'Veeresh'})); // Interestng 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







