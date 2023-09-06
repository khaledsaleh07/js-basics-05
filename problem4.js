document.getElementById("user-inp").addEventListener("blur", () => {
    let nb = parseInt(document.getElementById("user-inp").value);
    let summ = 0;
    for (let i = 0; i <= nb; i++) {
        if ( i % 3 === 0 || i % 5 === 0) {
            summ += i;
        }
    }
    document.getElementById("result").innerHTML = summ;

});