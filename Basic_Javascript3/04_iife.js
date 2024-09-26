// Immediately invoked Function Expression (IIFE)


(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();
// chai()

// With Arrow functions

( () =>{
    console.log(`DB Connected Two`);
    
} ) ();

//arrow functions with argument

( (name) =>{
    console.log(`DB Connected Two ${name}`);
    
} ) (`Veeresh`)