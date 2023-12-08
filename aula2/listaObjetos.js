// Definindo um objeto representando um cliente com várias propriedades, incluindo um array de telefones e um array de endereços
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

// Inicializando a propriedade enderecos com um array contendo um objeto de endereço
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

// Adicionando outro objeto de endereço ao array enderecos
cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

// Filtrando endereços que representam apartamentos
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

// Imprimindo a lista de endereços que são apartamentos
console.log(listaApenasApartamentos);
