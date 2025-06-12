const accountId = 144553
let accountEmail = "krishna@gmail.com"
var accountPassword = "123456"
accountCity = "Hazaribag"
let accountState;

// accountId = 2 // not allowed to assign const varibale twice

accountEmail = "abc@gmail.com"
accountPassword = "21212121"
accountCity = "Ranchi"

console.log(accountId);
/*
prefer not to use var keyword because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

