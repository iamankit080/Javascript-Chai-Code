const accountId=10000;
let accountEmail="ankitgupta8504@gmail.com";
var accountPassword="1234567890";
accountCity="Chandigarh"; //can reserve memory like this too but not recommended.
let accountState; // if declare and value not initialised--undefined.

//accountId=200; not allowed 

accountEmail="iamankit8504@gmail.com";
accountPassword="0987654321";
accountCity="mohali";

console.table([ accountId, accountEmail, accountPassword, accountCity]);

//recommended not to use var becuase of block scope and fucntional scope
//js had no control of block scope.