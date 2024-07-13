let score="33";

console.log(typeof score);
console.log(typeof (score));


let valueinNumber = Number(score)
console.log(typeof valueinNumber);

/*
"33"--> 33
"33abc" -->NaN
"true"-->1
*/

let isLoggedIn=1;
let booleanisLoggedIn=Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

/*

1, "value" -->true
0, " "-->false

*/

let number=33;
let stringnumber= String(number);
console.log(stringnumber);
console.log(typeof stringnumber);