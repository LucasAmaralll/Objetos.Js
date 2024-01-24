// Definição do objeto cliente com informações pessoais
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

// Adição de um endereço ao cliente
cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Função que simula uma ligação para o cliente, utilizando seus números de telefone
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

// Chama a função ligaParaCliente passando os números de telefone do cliente
ligaParaCliente(...cliente.telefone);
// Alternativamente, pode ser chamada assim:
// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// Cria um objeto encomenda usando dados do cliente
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0], // Usa spread operator para adicionar os dados do endereço
};

// Imprime os dados da encomenda no console
console.log(encomenda);
