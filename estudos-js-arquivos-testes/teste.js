const numeroMaximo = 10;
let participantes = ["Daniel", "Gabriel", "Davi", "Leona", "Pitu", "Boot"];
const cartelaUsuarios = []

function numeroAleatorio() {
    arrayNumeros = []

    for (let n = 0; n < numeroMaximo; n++) {
        const numero = Math.floor(Math.random() * numeroMaximo)
        if (!arrayNumeros.includes(numero)) {
            arrayNumeros.push(numero);
        } else {
            --n;
            continue;
        }
    }
    return arrayNumeros
}



function criaCartelasUsuarios(array) {
    let id = 0
    for (let user of array) {
        cartelaUsuarios.push({
            "id": id,
            "nome": user,
            "numero_cartela": null,
        })
        id++
    }
}

function numeroCartelaRodada() {

    cartelaUsuarios.map((chave) => {
        console.log(chave)
        if (chave.numero_cartela === null) {

            for (useRodada of cartelaUsuarios) {
                let cartela = numeroAleatorio();
                useRodada.numero_cartela = cartela
            }
        }
    })
}

criaCartelasUsuarios(participantes)

numeroCartelaRodad()

console.log("------------")
console.log(cartelaUsuarios)