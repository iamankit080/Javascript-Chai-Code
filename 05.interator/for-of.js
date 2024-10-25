const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world !"
for(const greet of greetings){
    console.log(`Each character is ${greet}`)
}


// maps - contains unique value and in same order.
const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('USA', "UNITED STATE")
console.log(map);

//iterate over map

for (const [key,value] of map) {   //array destructure
    console.log(key, ':-', value);
}

//for-of loop on object
//this is wrong way of iterating object.

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
}

for (const [key,value] of myObject) {   //array destructure
    console.log(key, ':-', value);
}


