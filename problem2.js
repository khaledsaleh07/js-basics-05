document.getElementById("first-name").addEventListener("blur", () => {
    const namme = document.getElementById("first-name").value;
    if (namme == "Alice" || namme == "Bob") {
        document.getElementById("result").innerHTML = "Hello " + namme;
    }
    else {
        document.getElementById("result").innerHTML = "Hello Stranger";
}
});