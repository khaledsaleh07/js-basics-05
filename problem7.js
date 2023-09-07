let output = "";
for (let i = 2; i <= 30; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        output += i + " ";
    }
}
console.log(output);


document.getElementById("result").innerHTML = output;

