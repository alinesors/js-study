// Função para calcular o saldo de vitórias e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Inicializa a variável 'nivel'
    let nivel;

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o saldo de vitórias e o nível
    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// Exemplo de uso da função
let resultado = calcularNivel(150, 25);
console.log(resultado);