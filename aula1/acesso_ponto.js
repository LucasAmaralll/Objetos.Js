// Definindo um objeto representando um cliente com várias propriedades
const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com"
};

// Imprimindo informações sobre o cliente usando a notação de string interpolada
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

// Imprimindo os 3 primeiros dígitos do CPF usando o método substring
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
