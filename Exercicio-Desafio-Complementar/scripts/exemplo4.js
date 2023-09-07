//Exemplo 4: Soma e Média de Valores usando for loop
let quantidadeValores = parseInt(prompt("Quantos valores você deseja inserir?"));
let soma = 0;

for (let i = 1; i <= quantidadeValores; i++) {
  const valor = parseFloat(prompt(`Digite o valor ${i}:`));
  soma += valor;
  
  const media = soma / i;
  console.log(`Soma: ${soma}, Média: ${media}`);
}