export default function quest5() {
    function inverter(string) {
        let stringInvertida = "";

        for (let i = string.length - 1; i >= 0; i--) {
            stringInvertida += string[i];
        }
        return stringInvertida;
    }

    const button = document.querySelector("button[onclick='quest5()']");
    button.addEventListener("click", () => {
        const input = document.getElementById("stringInput");
        const output = document.getElementById("output5");

        const valor = input.value;
        if (!valor.trim()) {
            output.innerText = "String inválida";
            return;
        }

        const resultado = inverter(valor);
        output.innerText = `String original: "${valor}"\nString invertida: "${resultado}"`;
    });
}
