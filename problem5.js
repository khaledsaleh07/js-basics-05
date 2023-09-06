document.getElementById("user-inp").addEventListener("blur", () => {
    let nb = parseInt(document.getElementById("user-inp").value.split(" ")[0]);
    let op = document.getElementById("user-inp").value.split(" ")[1];
    if (op === "+") {
        let summ = 0;
        for (let i = 0; i <= nb; i++) {
            summ += i;
        }
        document.getElementById("result").innerHTML = `the sum is ${summ} .`;
    }
    if (op === "x") {
        let p = 1;
        for (let i = 1; i <= nb; i++) {
            p *= i;
        }
        document.getElementById("result").innerHTML = `the product is ${p} .`;
    }

});