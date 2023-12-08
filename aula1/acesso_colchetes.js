// Definindo um objeto representando um cliente com várias propriedades
const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com"
};

// Imprimindo informações sobre o cliente usando a notação de string interpolada
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

// Definindo um array de chaves
const chaves = ["nome", "idade", "cpf", "email", "altura"];

// Iterando sobre as chaves usando forEach
chaves.forEach((chave) => {
    // Imprimindo o valor associado a cada chave no objeto cliente
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
