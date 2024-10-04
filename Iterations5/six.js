// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
    
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)

console.log(newNums);


const newnums1 = myNums.filter((num) => {
    return num > 4
})
console.log(newnums1);


const EmptyArr = []

myNums.forEach( (num) => {
    if (num > 3){
        EmptyArr.push(num)
    }
})
console.log(EmptyArr);


const Books = [
    {   title:'Book One', 
        genre:'science',
        publish:1990, 
        Edition: 2003
    },
    {   title:'Book Two', 
        genre:'Politcs',
        publish:2012, 
        Edition: 2005
    },
    {   title:'Book Three', 
        genre:'History',
        publish:1991, 
        Edition: 2007
    },
    {   title:'Book Four', 
        genre:'Kannada',
        publish:1994, 
        Edition: 2006
    },
    {   title:'Book Five', 
        genre:'English',
        publish:1997, 
        Edition: 2010
    },
    {   title:'Book Six', 
        genre:'social',
        publish:1999, 
        Edition: 2020
    },
    {   title:'Book Seven', 
        genre:'Medicne',
        publish:2000, 
        Edition: 2021
    },
    {   title:'Book Eight', 
        genre:'Hindi',
        publish:2010, 
        Edition: 2023
    },
    {   title:'Book Nine', 
        genre:'Bialogy',
        publish:2001, 
        Edition: 2024
    }
]

let  UserBokks = Books.filter( (bk) =>bk.genre === 'social' )
 UserBokks = Books.filter( (bk) => { 
    return bk.publish >= 1991 && bk.genre === "History" 
})
console.log(UserBokks);
// console.log(UserBokks);
