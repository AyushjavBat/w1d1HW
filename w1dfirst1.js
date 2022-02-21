const prompt = require('prompt-sync')();

function salesman() {
    let empl = prompt('If you are an salared man, answer yes or no :');
    let sales = prompt('Enter you sales amount :');
    let rate;
    if (empl == "yes") {
        if (sales < 300) {
            rate = 0;
        } else if (sales < 500) {
            rate = 0.01;
        } else {
            rate = 0.02;
        }
    } else {
        if (sales < 300) {
            rate = 0;
        } else if (sales > 300 && sales < 500) {
            rate = 0.02;
        } else {
            rate = 0.03;
        }
    }
    let commission = sales * rate;
    return commission;
}
console.log(salesman());