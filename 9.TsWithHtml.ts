function getInfo() {
    
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const ageInput = document.getElementById("age") as HTMLInputElement;

    const nameValue = nameInput.value;
    const passwordValue = passwordInput.value;
    const ageValue = ageInput.valueAsNumber;

    console.log(`Name: ${nameValue}, Password: ${passwordValue}, Age: ${ageValue}`);

    nameInput.value = "";
    passwordInput.value = "";
    ageInput.value = "";

     
}

