export default function quest2() {
    function fibonacci(valor) {
        let a = 0;
        let b = 1;

        if (valor === 0 || valor === 1) {
            return `O número ${valor} pertence a sequência de Fibonacci`;
        }

        while (b < valor) {
            let aux = a + b;
            a = b;
            b = aux;
        }

        return b === valor
            ? `O número ${valor} pertence a sequência de Fibonacci`
            : `O número ${valor} não pertence a sequência de Fibonacci`;
    }

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const input = document.getElementById("fibonacciInput");
        const output = document.getElementById("output2");

        const valor = Number(input.value);
        if (isNaN(valor) || valor < 0) {
            output.innerText = "Número inválido";
            return;
        }

        output.innerText = fibonacci(valor);
    });
}
