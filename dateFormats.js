//Practice problem to get the current date in multiple formats

let x = new Date();

let date = x.getDate();
let month = x.getMonth();
let year = x.getFullYear();

//In the below statements, 1 has been added to the month since the month counter is starting from 0

console.log(`Date format 1: ${date}/0${month + 1}/${year}`);
console.log(`Date format 2: 0${month + 1}/${date}/${year}`);