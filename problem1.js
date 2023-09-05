document.getElementById("first-name").addEventListener("blur", () => {
    document.getElementById("result").innerHTML = "Hello " + document.getElementById("first-name").value;
});

