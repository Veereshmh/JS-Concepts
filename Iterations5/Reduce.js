//Reduce

const myNums = [1,2,3]

let myTotal = myNums.reduce(function (acc, CurVal){
    // console.log(`acc: ${acc} and CurVal ${CurVal}`);
    
    return acc + CurVal
}, 0)



// In Arrow Function
const myTotal1 = myNums.reduce( (acc, CurVal) => acc+CurVal, 0)

console.log(myTotal1);


const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]
const itemshopping = shoppingCart.reduce( (acc, item) =>acc + item.price,0)

console.log(itemshopping);
