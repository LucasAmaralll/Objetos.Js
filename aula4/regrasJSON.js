// Analisando detalhadamente o formato JSON, percebemos algumas particularidades que desconhecemos:

// Não existem variáveis
// Nessa nova notação, não precisamos dar o nome para onde vamos guardar esse objeto.

// Chaves das propriedades têm aspas duplas (" ")
// As chaves são escritas de modo parecido com o da string, mas são estritamente aspas duplas, como "nome".

// Arrays e objetos aninhados podem existir
// Como em "telefone" e "endereco".

// Restrição de trailing comma
// Nesse formato, é proibido ter vírgula no último item de um bloco, como em "complemento": "ap 934", diferente do JavaScript comum. Precisamos sempre nos atentar a essa limitação e não deixar vírgulas sobrando.

// Além dessas diferenças que percebemos no trecho de exemplo, temos algumas outras:

// Funções não são permitidas, precisamos omiti-las do nosso objeto;
// Comentários não são permitidos;
// Suporta apenas tipos primitivos (string, number, boolean, null);
// O undefined também não é permitido;
// Algumas estruturas mais complexas, como datas ou a escrita em Regex, também podem não ser aceitas.
