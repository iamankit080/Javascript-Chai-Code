let score="33";

//console.log(typeof score);
//console.log(typeof (score));


let valueinNumber = Number(score)
//console.log(typeof valueinNumber);

/*
"33"--> 33
"33abc" -->NaN
"true"-->1
*/

let isLoggedIn=1;
let booleanisLoggedIn=Boolean(isLoggedIn);
//console.log(booleanisLoggedIn);

/*

1, "value" -->true
0, " "-->false

*/

let number=33;
let stringnumber= String(number);
//console.log(stringnumber);
//console.log(typeof stringnumber);

/************************operations***************************/

let value = 10; 
let negValue = -value;
//console.log(negValue);


//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);

let str1="hello"
let str2=" ankit"

let str3=str1+str2;
//console.log(str3);


//console.log("1"+2);    // consider number as string and add then 12
//console.log(1+"2");    // consider number as string and add then 12
//console.log("1"+2+2);   // consider number as string and add then 122
//console.log(1+2+"2");   // consider number as string and add then 32

//driven by acma script guidelines

//console.log(true);  //return true
//console.log(+true);  // return 1
//console.log(+"");  // return 0

/* If used postfix, with operator after operand (for example, x++), the increment 
operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the
 increment operator increments and returns the value after incrementing.

 */
let gamecounter = 100;
gamecounter++;

console.log(gamecounter);
