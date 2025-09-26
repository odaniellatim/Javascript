let produtos = [
    { nome: 'Caneta', preco: 2.50 },
    { nome: 'Caderno', preco: 15.00 },
    { nome: 'Borracha', preco: 1.00 },
    { nome: 'Mochila', preco: 120.00 },
    { nome: 'Lápis', preco: 0.80 },
];

const total = produtos.filter(value => value.preco > 10).map(value => value.preco).reduce(sum, 0)

function sum(anterior, atual) {
    return anterior + atual;
}

console.log(total)