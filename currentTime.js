//Problem to get the current time

let todaysDate = new Date();
let hour = todaysDate.getHours();
let minutes = todaysDate.getMinutes();
let seconds = todaysDate.getSeconds();

console.log(`Current time is: ${hour} : ${minutes} : ${seconds}`);