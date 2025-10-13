import { itemsAttack } from "./bd.js"


// class Objeto {

//     constructor(nome, level, img) {
//         this.nome = nome;
//         this.level = level;
//         this.img = img;
//     }
// }


// const obj1 = new Objeto("Kronos Axe", 146, "https://user.wartale.com/images/items/itWA310.jpg");

// const itemList = document.querySelector(".container_items-list_card");
// const nomeItem = document.querySelector(".container_items-list_item-headline h2")

// nomeItem.innerText = ""

// nomeItem.innerText = obj1.nome

// console.log(nomeItem)
const container = document.querySelector(".container_items-list");

itemsAttack.map((value) => {
    const section = document.createElement("section");
    section.classList.add("container_items-list_card");

    section.innerHTML = `
    <a href="info-item.html?id=${value.id}">
        <!-- Nome e level do item-->
        <header class="container_items-list_item-headline">
            <h2>${value.nome}</h2>
            <div class="container_items-list_item-headline_info">
                <span>LEVEL - ${value.requirements.level}</span>
                <span>
                    <img src="${value.handed === 2 ? "assets/images/items-two-handed.png" : "assets/images/items-one-handed.png"}" title="duas mãos" alt="duas mãos">
                </span>
            </div>
        </header>

        <!-- Foto de destaque do item-->
        <div class="container_items-list_item_imagem">
            <img src="${value.img}" alt="${value.nome}"
                title="${value.nome}">
        </div>
    </a>
    `

    container.appendChild(section)
});


