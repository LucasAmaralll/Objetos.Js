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

// Obtém as chaves do objeto cliente
const chavesDoObjeto = Object.keys(cliente);

// Imprime as chaves no console (opcional, para visualização)
console.log(chavesDoObjeto);

// Verifica se a chave "enderecos" está presente no objeto cliente
if (!chavesDoObjeto.includes("enderecos")) {
    // Emite um erro no console se não houver endereço cadastrado
    console.error("Erro. É necessário ter um endereço cadastrado.");
}
