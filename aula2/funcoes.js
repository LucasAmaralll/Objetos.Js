// Definindo um objeto chamado 'cliente' que armazena informações sobre um cliente
const cliente = {
    // Propriedade para armazenar o nome do cliente
    nome: "João",
    
    // Propriedade para armazenar a idade do cliente
    idade: 24,
    
    // Propriedade para armazenar o email do cliente
    email: "joao@firma.com",
    
    // Propriedade para armazenar um array de números de telefone do cliente
    telefone: ["1155555550", "1144444440"],
    
    // Propriedade para armazenar o saldo do cliente
    saldo: 200,
    
    // Método para efetuar um pagamento com base no valor passado como parâmetro
    efetuaPagamento: function (valor) {
        // Verifica se o valor do pagamento é maior que o saldo disponível
        if (valor > this.saldo) {
            // Se o saldo for insuficiente, exibe uma mensagem
            console.log("Saldo insuficiente");
        } else {
            // Se o saldo for suficiente, subtrai o valor do pagamento do saldo
            this.saldo -= valor;
            // Exibe uma mensagem indicando que o pagamento foi realizado e o novo saldo
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

// Chamando o método efetuaPagamento do objeto cliente com um valor de pagamento de 25
cliente.efetuaPagamento(25);
