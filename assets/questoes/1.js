export default function quest1() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    document.getElementById("output1").innerText = `O valor da variável soma é: ${soma}`;
}
