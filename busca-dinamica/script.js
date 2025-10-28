const obj = [
    {
        id:01,
        nome: "Daniel"
    },
    {
        id:02,
        nome: "Pitu"
    },
    {
        id:03,
        nome: "Leona"
    },
    {
        id:04,
        nome: "Boot"
    },
    {
        id:05,
        nome: "Aline"
    },
    {
        id:05,
        nome: "Aline Modesto"
    }
];

const nome = document.querySelector("#nome");
const buttom = document.querySelector("button");
const resultado = document.querySelector("#resultado");
const items = document.querySelector("#items");
const b = document.querySelector(".busca");

//Escondendo os items antes de realizar a busca.
b.classList.add('hidden');

//lista os items do Objeto.
obj.map((value) => {
    items.innerHTML += `<p> ${value.id}. ${value.nome}</p>`;
});

//Ação do botão para buscar um item.
buttom.addEventListener("click", () => {

    if (nome.value) {

        b.classList.remove('hidden');
        resultado.innerHTML = "";
        resultado.style.color = "";

        let busca = search(nome.value);

        if (busca.length > 0) {
            console.log(busca)
            busca.forEach((value) => {
                resultado.innerHTML += `<p> ${value.id}. ${value.nome}</p>`;
            })
        } else {

            resultado.innerHTML += `<p> Nenhum item encontrado. </p>`;
            resultado.style.color = "red";
        }

    }
});


//Faz a busca no array e retorna true e false
function search(inputValue) {

    const busca = obj.filter((value) => {

        const arrayNomes = value.nome.toLowerCase();
        const inputUser = inputValue.toLowerCase();

        if (arrayNomes.includes(inputUser)) {
            return true
        } else {
            return false
        }
    })
    return busca
}
