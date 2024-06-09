const clave1 = 9; const password1 = 7;
const clave2 = 1; const password2 = 1;
const clave3 = 1; const password3 = 4;

const input01 = document.querySelector("#input01");
const input02 = document.querySelector("#input02");
const input03 = document.querySelector("#input03");
const button = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");

button.addEventListener("click", () => {
    const input1Value = parseInt(input01.value);
    const input2Value = parseInt(input02.value);
    const input3Value = parseInt(input03.value);

    if (input1Value === clave1 && input2Value === clave2 && input3Value === clave3) {
        console.log("clave correcta");
        parrafo.textContent = "password 1 correcta";
    } else if (input1Value === password1 && input2Value === password2 && input3Value === password3) {
        console.log("clave correcta");
        parrafo.textContent = "password 2 correcta";
    } else {
        parrafo.textContent = "password incorrecta";
        console.log("Clave incorrecta"); }
});