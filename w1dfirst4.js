let n = 5;
let squer = "";
for (let r = 1; r <= n; r++) {
    for (let c = 1; c <= n; c++) {
        squer += c;
    }
    squer += "\n";
}
console.log(squer);

let upTraingle = "";
for (let r = 1; r <= n; r++) {
    for (let c = 1; c <= r; c++) {
        upTraingle += r;
    }
    upTraingle += "\n";
}
console.log(upTraingle);

let downTraingle = "";
for (let r = n; r >= 1; r--) {
    for (let c = 1; c <= r; c++) {
        downTraingle += r;
    }
    downTraingle += "\n";
}
console.log(downTraingle);