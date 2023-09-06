document.getElementById("user-inp").addEventListener("blur", () => {
    let nb = parseInt(document.getElementById("user-inp").value);
    let summ = 0;
    for (let i = 0; i <= nb; i++) {
        summ += i;
    }
    document.getElementById("result").innerHTML = summ;

});