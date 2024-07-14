const score=400;   // implicitly define that it is a number
console.log(score);

const balance = new Number(100);  //explicitly defined that it is a number
console.log(balance);

// method to convert num into string -- now additional property of string can be used as well.
console.log(balance.toString());
console.log(balance.toString().length);
console.log(typeof(balance));

//toFixed :- for precision value
console.log(balance.toFixed(2));


const anothervalue=123.8966
console.log(anothervalue.toPrecision(4));

//for clear interpretation
const anothernumber = 100000;
console.log(anothernumber.toLocaleString('en-IN')); // into indian standard


// ++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++
// ny default library in javascript


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.63));
console.log(Math.ceil(4.63));
console.log(Math.floor(4.63));
console.log(Math.min(4,5,6,7,8,63));
console.log(Math.max(4,5,6,7,8,63));


console.log(Math.random());  // alway value between 0 to 1.
console.log((Math.random()*10) + 1);
console.log(math.floor(Math.random()*10) + 1 );


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)

