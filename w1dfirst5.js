const prompt = require('prompt-sync')();

function downPayment() {
    let cost = prompt('Enter cost of house :');
    let payment;
    if (cost < 50000) {
        payment = cost * 0.05;
    } else if (cost < 100000) {
        payment = 1000 + (cost - 50000) * 0.1;
    } else if (cost < 200000) {
        payment = 2000 + (cost - 100000) * 0.15;
    } else {
        payment = 5000 + (cost - 200000) * 0.1;
    }
    return payment;
}
console.log(downPayment());