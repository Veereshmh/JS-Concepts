// for

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 3){
        console.log("3 is best number");        
    }
    console.log(element);    
}



// Nested Loops

for (let i = 0; i <= 5; i++) {
    // console.log(`outer loop valoe ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);        
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

const myArray = ['Superman', 'Shaktiman', 'Batman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    }