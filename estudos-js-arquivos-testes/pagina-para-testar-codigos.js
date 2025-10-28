let produtos = [
    { nome: 'Caneta', preco: 30.5 },
    { nome: 'Caderno', preco: 55.50 },
    { nome: 'Borracha', preco: 45.00 },
    { nome: 'Mochila', preco: 120.00 },
    { nome: 'Lápis', preco: 75.50 },
    { nome: '10 Livros', preco: 105.90 },
];

const total = produtos.filter(value => value.preco > 10).map(value => value.preco).reduce(sum, 0)

function sum(anterior, atual) {
    return anterior + atual;
}

const obj = {
    name: "Daniel",
    sobrenome: "Latim",
    idade: 30,
    end: {
        rua: "Engenheiro",
        estado: "SP",
        numero: 192,
    }
}
let cond = 50
let items = produtos.filter(value => value.preco > cond)
let i = 1;
const { name, sobrenome, idade, end: { rua, estado, numero } } = obj

console.log(`User: ${name} ${sobrenome} - ${idade} anos`);
console.log(`Rua: ${rua}, ${numero} - ${estado}`);
console.log("Produtos: ")
for (let produto of items) {

    console.log(`${i}. ${produto.nome} - R$ ${produto.preco}`)
    i += 1;
}


let num = 10.5;
let n = 35.2;
let z = 50.6

let result = num + n + z;
let convert = result.toFixed(2).toString().replace(".", ",")

console.log("R$", convert);