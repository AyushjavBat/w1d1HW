const prompt = require('prompt-sync')();
let num = prompt('Enter number : ');
let count = 0;
while (num > 0) {
    count += num % 10;
    num = Math.floor(num / 10);
}
console.log(count);