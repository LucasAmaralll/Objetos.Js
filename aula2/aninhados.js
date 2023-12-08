// Definindo um objeto representando um cliente com várias propriedades, incluindo um array de telefones e um objeto de endereço
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

// Adicionando um objeto de endereço ao cliente
cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

// Imprimindo o objeto de endereço do cliente
console.log(cliente.endereco);
