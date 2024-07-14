
const name = "Ankit"
const age = 22

// old syntax, not recommended
console.log(name + age + "value");

// backticks-string interpolation, make placeholder and inject variable
console.log(`Hello, my name is ${name} and my age is ${age}`);



const newname = new String('Ankit-kr')   // string declared using object.
console.log(newname[0]);   //key-value pair, not an array.
console.log(newname.__proto__); //return object
console.log(newname.length); //find length of string
console.log(newname.toUpperCase()); // change all into uppercase
console.log(newname.charAt(2)); // find which character at particular position.
console.log(newname.indexOf('t')); //find the index of a character.

const newString = newname.substring(0,4);
console.log(newString);

const anotherString = newname.slice(-6,4);  //can take negative value, start from bakcward if negative value is there.
console.log(anotherString);


//trim--remove start space and end space

const newStringOne = "    Ankit    ";
console.log(newStringOne);
console.log(newStringOne.trim());


//replace:--replace value in a string.
const url="https://ankit.com/ankit%20kumar";
console.log(url.replace('%20', '-'));


//includes:-check whether it is present in string or not
console.log(url.includes('ankit'));

//split :- split on the bais of something/separator and return an array. 

console.log(newname.split('-'));









