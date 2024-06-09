const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const button = document.getElementById("tbn");
const parrafo = document.getElementById("parrafo");

button.addEventListener("click", () => {
    const valor1 = parseInt(input1.value);
    const valor2 = parseInt(input2.value);
    const valor3 = parseInt(input3.value);

    const suma = valor1 + valor2 + valor3;

    if (suma <= 10) {
        parrafo.textContent = "Sticker Permitidos";
    } else {
        parrafo.textContent = "Demasiados stickers";
}
});