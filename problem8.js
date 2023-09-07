// const rightNumber = 50;
// const output = "";
// document.getElementById("check-btn").addEventListener("click", () => {
//     let nb_of_guesses = 1;
//     let guess = parseInt(document.getElementById("user-inp").value);
//     while (guess != rightNumber) {
//         if (nb_of_guesses <= 8) {
//             document.getElementById("user-inp").value = "";
//             if ( guess > rightNumber) {
//                 document.getElementById("result").innerHTML += `too large. Trial ${nb_of_guesses}/8. <br>`;
//             }
//             else if ( guess < rightNumber) {
//                 document.getElementById("result").innerHTML += `too small. Trial ${nb_of_guesses}/8. <br>`;
//             }
//             nb_of_guesses += 1;
//         }
//         else {
//             document.getElementById("result").value = "no more trials";
//         }
       
//     }
// });

const rightNumber = 50;
let nb_of_guesses = 1;

document.getElementById("check-btn").addEventListener("click", () => {
    if (nb_of_guesses <= 8) {
        let guess = parseInt(document.getElementById("user-inp").value);

        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            return;
        }

        document.getElementById("user-inp").value = "";

        if (guess > rightNumber) {
            document.getElementById("result").innerHTML += `Too large. Trial ${nb_of_guesses}/8. <br>`;
        } else if (guess < rightNumber) {
            document.getElementById("result").innerHTML += `Too small. Trial ${nb_of_guesses}/8. <br>`;
        } else {
            document.getElementById("result").innerHTML += `Congratulations! You guessed it right in ${nb_of_guesses} trials.`;
            document.getElementById("check-btn").disabled = true; // Disable the button after guessing correctly.
        }

        nb_of_guesses += 1;
    } else {
        document.getElementById("result").innerHTML = "No more trials.";
        document.getElementById("check-btn").disabled = true; // Disable the button after 8 trials.
    }
});
