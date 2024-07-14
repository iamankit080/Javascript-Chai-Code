/* primitive datatype :- these are call by value.
1. string
2. number
3. boolean
4. null
5. undefined
6. Symbol :- used to make value unique.
7. big int  :- to represent bigint add n at the end of number.



non primitive datatype/ reference datatype:-
1.array
2.object
3. functions.


javascript is a dynamically typed language, datatype
variable is determined by the value they hold at run time.
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);
//same vaule but symbol makes it unique

//array
const player = ["virat", "rohit", "dhoni"];

//object
let myObj= {
    name: "Ankit",
    age: 20,
}

//function
const myFunction = function(){
    console.log("hello world")
}

//return type of no-primitive datatype is object.
// function return type is function object.


/* ++++++++++++++++++++++++++++++++ stack and heap memory ++++++++++++++++++++++
stack :- primitive datatype, get copy of a variable.
heap :- non-primitive datatype, get address/reference of a variable.
*/


//stack memory example
let myYoutubechannel="hiteshchoudhrydotcom";
let anotherChannel=myYoutubechannel;
anotherChannel="chaiaurcode";

console.log(myYoutubechannel);
console.log(anotherChannel);


//heap memory
let user1= {
    emailId:"ankitgupta8504@google.com",
    upiId: "9001055461@ybl",
}

let user2 = user1;
user2.emailId="iamankit8504@gmail.com",


console.log(user1.emailId)
console.log(user2.emailId)

