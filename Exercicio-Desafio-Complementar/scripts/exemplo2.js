//Exemplo 2: Empréstimo com Parcelas Decrescentes usando while loop
const valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
let parcela = valorEmprestimo;

let i = 1;
while (parcela > 0) {
  console.log(`Parcela ${i}: ${parcela}`);
  parcela = parcela - (valorEmprestimo / 10);
  i++;
}
