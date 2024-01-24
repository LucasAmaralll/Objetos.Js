// Utilização do módulo 'require' para importar dados de um arquivo JSON chamado 'clientes.json'
const clientes = require("./clientes.json");

// Função 'filtrarApartamentosSemComplemento' que recebe uma lista de clientes e retorna aqueles que moram em apartamentos sem complemento no endereço
function filtrarApartamentosSemComplemento(clientes) {
    // Utiliza o método 'filter' para criar uma nova lista contendo apenas os clientes que atendem à condição especificada
    return clientes.filter((cliente) => {
        // Condição: cliente mora em apartamento e não possui a propriedade 'complemento' no endereço
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

// Chama a função 'filtrarApartamentosSemComplemento' passando a lista de clientes e armazena o resultado na variável 'filtrados'
const filtrados = filtrarApartamentosSemComplemento(clientes);

// Imprime no console a lista de clientes que moram em apartamentos sem complemento
console.log(filtrados);
