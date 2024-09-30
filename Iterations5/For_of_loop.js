// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);    
}


const greetings = "Hello World"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);    
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")
map.set('IN', "India")
console.log(map);


for (const [key, value] of map){
    console.log(key, ':-', value);
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// }

// for (const [key,value] of myObject){
//     console.log(key, ':-', value);
    
// }

// For in loop

const myObject1 = {
    js: 'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by app'
}

for (const key in myObject1) {
   console.log(`${key} shortcut is for ${myObject1[key]}`);  
        
    }
 const progrmaning = ['js', 'rb', 'py','Java', 'cpp']

 for (const key in progrmaning) {
    console.log(key);
    
 }

 const map1 = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")
map.set('IN', "India")


for (const key in map1) {
    //console.log(key);
    
    
}


// for Each Loop

const coding = ['js', 'rb', 'py','Java', 'cpp']

coding.forEach( function greet(val){
    //console.log(val);
    
} )

coding.forEach( (item) => {
    console.log(item);
    
})


function printMe(item){
    console.log(item);
    }
// coding.forEach(printMe)

coding.forEach( (item,index, arr) => {
    console.log(item, index, arr);
    
})