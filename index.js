let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function genPassword() {
    let passwordLength = 15;
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        let randomNumber2 = Math.floor(Math.random() * chars.length);
        password1 += chars[randomNumber]
        password2 += chars[randomNumber2]
    }
    document.getElementById("password-1").value = password1;
    document.getElementById("password-2").value = password2;

}