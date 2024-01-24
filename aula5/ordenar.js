// Utilização do módulo 'require' para importar dados de um arquivo JSON chamado 'clientes.json'
const clientes = require("./clientes.json");

// Função 'ordenar' que recebe uma lista e uma propriedade, e retorna a lista ordenada com base na propriedade especificada
function ordenar(lista, propriedade) {
    // Utiliza o método 'sort' para ordenar a lista com base em valores da propriedade especificada
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    // Retorna a lista ordenada
    return resultado;
}

// Chama a função 'ordenar' passando a lista de clientes e a propriedade "nome" para ordenação
const ordenadoNome = ordenar(clientes, "nome");

// Imprime no console a lista de clientes ordenada pelo nome
console.log(ordenadoNome);
