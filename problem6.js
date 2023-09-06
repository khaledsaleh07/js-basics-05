let output = "";
for ( let i = 1; i <= 12; i ++) {
    output += `${i}: `
    for ( let j = 1; j <= 12; j++) {
        output += `${i*j} `;
    }
    output += "<br>";
}

document.getElementById("result").innerHTML = output;