export default function quest3() {
    fetch("assets/data/dados.json")
        .then(response => response.json())
        .then(dados => {
            const valoresFiltrados = dados.map(item => item.valor).filter(valor => valor > 0 && valor != null);

            if (valoresFiltrados.length === 0) {
                document.getElementById("output3").innerText = 'Nenhum valor válido encontrado';
                return;
            }

            const menorValor = Math.min(...valoresFiltrados);
            const maiorValor = Math.max(...valoresFiltrados);

            const faturamento = valoresFiltrados.reduce((acc, valor) => acc + valor, 0);
            const mediaMensal = faturamento / valoresFiltrados.length;

            const diasAcimaMedia = valoresFiltrados.filter(valor => valor > mediaMensal).length;

            document.getElementById("output3").innerText =
                `Menor valor faturado: R$${menorValor.toFixed(2)}\n` +
                `Maior valor faturado: R$${maiorValor.toFixed(2)}\n` +
                `Dias acima da média: ${diasAcimaMedia}`;
        })
        .catch(err => {
            document.getElementById("output3").innerText = `Erro ao carregar os dados: ${err.message}`;
        });
}
