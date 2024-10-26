// first time accumulator value is initial value, after that accumulator is sum of accumulator+currentvalue

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function(accumulator, currentvalue){
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
    return accumulator+currentvalue
},0) // 0 used to give intital value to accumulator.
console.log(myTotal);


const myTotal1 = myNums.reduce((acc, currval) => (acc+currval), 0)
console.log(myTotal1);


const shoppingCart = [
    {
        intemName: "js. course",
        price: 2999
    },

    {
        itemName: "python",
        price: 3999
    },

    {
        itemName: "jmobile dev. course",
        price: 5999
    },
    
    {
        itemName: "data sceintist course",
        price: 13999
    },
]

const priceTopay = shoppingCart.reduce((acc, item)=> acc + item.price,0)
console.log(priceTopay);


