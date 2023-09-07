


let quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));
let valorTotal = parseFloat(prompt("Digite o valor total:"));

let parcelaAtual = 1;

while (parcelaAtual <= quantidadeParcelas) {
  let valorParcela = valorTotal / quantidadeParcelas;
  console.log(`Parcela ${parcelaAtual}: R$ ${valorParcela.toFixed(2)}`);
  parcelaAtual++;
}


