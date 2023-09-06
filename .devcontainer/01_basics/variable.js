const accountId=12369;
let accountEmail="vikas@gmail.com";
var accountName="vikas"
let accountPassword= "2525220"
console.log(accountId);
accountState="delhi"
let accountCity
console.table([accountEmail,accountName,accountState,accountCity])
//accountId=56585528 //this is not valid constant can not be change
/*prefer not to use var
because of issue of block scope and functional scope*/
accountName="nikhil"
accountEmail="nikhil@gmail.com"
accountPassword="56822"
console.table([accountEmail,accountName,accountState,accountCity,accountPassword])