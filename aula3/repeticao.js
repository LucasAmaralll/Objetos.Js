// Definindo um objeto chamado 'cliente' com informações básicas
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

// Adicionando informações sobre endereço ao objeto 'cliente'
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Iterando sobre as propriedades do objeto 'cliente'
for (let chave in cliente) {
    // Obtendo o tipo da propriedade atual
    let tipo = typeof cliente[chave];

    // Verificando se o tipo não é 'object' ou 'function'
    if (tipo !== 'object' && tipo !== 'function') {
        // Exibindo no console a chave e o valor correspondente
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
