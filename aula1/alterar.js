// Definindo um objeto representando uma pessoa com propriedades nome e profissao
const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

// Imprimindo o nome da pessoa
console.log(pessoa.nome);

// Tentando imprimir o telefone da pessoa (inicialmente não definido)
console.log(pessoa.telefone);

// Adicionando a propriedade telefone ao objeto pessoa
pessoa.telefone = "11 222333444";

// Imprimindo o telefone da pessoa após a adição
console.log(pessoa.telefone);

// Alterando o nome da pessoa
pessoa.nome = "Luma Silva";

// Imprimindo o objeto pessoa completo após as modificações
console.log(pessoa);
