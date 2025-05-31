 const resultPass = document.getElementById("resultPass");

function generatePassword() {
    const includeLower = document.getElementById("includeLower").checked;
    const includeUpper = document.getElementById("includeUpper").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const passlenght = document.getElementById("passlenght").value;
   
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%&*";

    let allowChar = "";
    let password = "";

    if (includeLower) {
        allowChar += lowercase;
    }
    if (includeUpper) {
        allowChar += uppercase;
    }
    if (includeSymbols) {
        allowChar += symbols;
    }
    if (includeNumbers) {
        allowChar += numbers;
    }
    if (allowChar === "") {
        resultPass.textContent = "❗ Please select at least one character type.";
        return;
    }
    if (passlenght <8){
        resultPass.textContent = "❗ Password length should be at least 8  ";
        return;
    }

    for (let i = 0; i < passlenght; i++) {
        password += allowChar[Math.floor(Math.random() * allowChar.length)]
    }

   

    resultPass.textContent = `Generated password - ${password}`


}
