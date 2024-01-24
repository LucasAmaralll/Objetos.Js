// Utilização do módulo 'require' para importar dados de um arquivo JSON chamado 'cliente.json'
const dados = require("./cliente.json");

// Imprime os dados importados do arquivo JSON no console
console.log(dados);

// Imprime o tipo de dado dos dados importados no console
console.log(typeof dados);

// Converte o objeto 'dados' para uma string JSON
const clienteEmString = JSON.stringify(dados);

// Imprime a string JSON no console
console.log(clienteEmString);

// Imprime o tipo de dado da string JSON no console
console.log(typeof clienteEmString);

// Tenta acessar a propriedade 'nome' diretamente na string JSON (irá resultar em 'undefined')
console.log(clienteEmString.nome);

// Converte a string JSON de volta para um objeto JavaScript usando JSON.parse
const objetoCliente = JSON.parse(clienteEmString);

// Imprime o objeto reconstruído a partir da string JSON no console
console.log(objetoCliente);

// Imprime o valor da propriedade 'nome' do objeto reconstruído
console.log(objetoCliente.nome);
