const prompt = require('prompt-sync')();


function printSavingAccount() {
    let initial_amount = prompt('Enter initial amount :');
    let annual_interest_rate = prompt('Enter annual interest rate :');
    let number_of_years = prompt('Enter number of years to compound :')
    let compounded_times = number_of_years * 12;
    let future_value = initial_amount * (1 + annual_interest_rate / compounded_times) ^ (compounded_times * number_of_years);
    return future_value;
}
console.log(printSavingAccount());