// Utilização do módulo 'require' para importar dados de um arquivo JSON chamado 'clientes.json'
const clientes = require("./clientes.json");

// Função 'encontrar' que recebe uma lista, uma chave e um valor, e retorna o primeiro item que contém o valor na chave especificada
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

// Utiliza a função 'encontrar' para buscar um cliente pelo nome "Kirby" na lista de clientes
const encontrado = encontrar(clientes, "nome", "Kirby");

// Utiliza a função 'encontrar' para buscar um cliente pelo telefone "1918820860" na lista de clientes
const encontrado2 = encontrar(clientes, "telefone", "1918820860");

// Imprime no console o resultado da busca pelo nome "Kirby"
console.log(encontrado);

// Imprime no console o resultado da busca pelo telefone "1918820860"
console.log(encontrado2);
