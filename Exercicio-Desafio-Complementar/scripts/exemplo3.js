//Exemplo 3: Entrada até "sair" usando while loop
let entrada = prompt("Digite um valor ou 'sair' para sair:");

while (entrada !== "sair") {
  // Manipule a entrada conforme necessário
  console.log(`Você digitou: ${entrada}`);
  
  entrada = prompt("Digite um valor ou 'sair' para sair:");
}