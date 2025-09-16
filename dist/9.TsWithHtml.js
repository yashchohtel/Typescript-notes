"use strict";
function getInfo() {
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const ageInput = document.getElementById("age");
    const nameValue = nameInput.value;
    const passwordValue = passwordInput.value;
    const ageValue = ageInput.valueAsNumber;
    console.log(`Name: ${nameValue}, Password: ${passwordValue}, Age: ${ageValue}`);
    nameInput.value = "";
    passwordInput.value = "";
    ageInput.value = "";
}
