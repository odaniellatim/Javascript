import { itemsAttack } from "./bd.js"
import { selectElement } from "./calc-item.js";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const id = Number(params.get('id'));
const container = document.querySelector(".container-item-info_card");


itemsAttack.map((infoItem) => {
    if (infoItem.id === id) {
        container.innerHTML = `
        
    <!-- Lista de Items filtrados ou todos-->
            <div class="container-item-info_card_head-foto">
                <h2>${infoItem.nome}</h2>
                <img src="${infoItem.img}" alt="${infoItem.nome}"
                    title="${infoItem.nome}">

            </div>

            <!-- Descrição do item selecionado-->
            <div class="container-item-info_filter">

                <div class="container-item-info_filter_align-options">
                    <select>
                        <option>Spec</option>
                        <option>FS</option>
                        <option>MS</option>
                        <option>PS</option>
                    </select>
                    <select>
                        <option>Mix</option>
                        <option>Celesto</option>
                        <option>Oredo</option>
                        <option>Sol</option>
                    </select>
                    <select>
                        <option>Age</option>
                        <option>+1</option>
                        <option>+2</option>
                        <option>+3</option>
                    </select>
                </div>

                <div class="container-item-info_filter_requirements">
                    <h2>Requirements</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Level</td>
                                <td>${infoItem.requirements.level}</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Strength</td>
                                <td>${infoItem.requirements.forca}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                            <tr>
                                <td>Talent</td>
                                <td>${infoItem.requirements.talento}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="container-item-info_filter_requirements">
                    <h2>Base Stats</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Min Damage</td>
                                <td class="min-demage">${infoItem.base_status.min_demage[0]} - ${infoItem.base_status.min_demage[1]}</td>
                                <td>
                                    <input id="input-min-demage" type="number" placeholder="Insira o valor do item" min="${infoItem.base_status.min_demage[0]}" max="${infoItem.base_status.min_demage[1]}">
                                </td>

                            </tr>
                            <tr>
                                <td>Max Damage</td>
                                <td class="max-demage">${infoItem.base_status.max_demage[0]} - ${infoItem.base_status.max_demage[1]}</td>
                                <td>
                                    <input id="input-max-demage" type="number" placeholder="Insira o valor do item" min="${infoItem.base_status.max_demage[0]}" max="${infoItem.base_status.max_demage[1]}">
                                </td>

                            </tr>
                            <tr>
                                <td>Attack Speed</td>
                                <td>${infoItem.base_status.attack_speed}</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>Critical</td>
                                <td>${infoItem.base_status.critical_base}%</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>Attack Rating</td>
                                <td>${infoItem.base_status.attack_rating_base[0]} - ${infoItem.base_status.attack_rating_base[1]}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                            <tr>
                                <td>Block</td>
                                <td>${infoItem.base_status.block_base}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                            <tr>
                                <td>Integrity</td>
                                <td>${infoItem.base_status.integrity_base[0]} - ${infoItem.base_status.integrity_base[1]}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="container-item-info_filter_requirements">
                    <h2>Spec. Stats</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Critical</td>
                                <td>${infoItem.spec_status.critical_spec}</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>Attack Power</td>
                                <td>${infoItem.spec_status.attack_power_spec}</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>Attack Rating</td>
                                <td>${infoItem.spec_status.attack_rating_spec}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="container-item-info_filter_requirements">
                    <h2>Spec. Stats</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Primary Spec</td>
                                <td>${infoItem.misc.primary_spec}</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>Secondary Spec</td>
                                <td>${infoItem.misc.secondary_spec.join(" - ")}</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>${infoItem.misc.weight}</td>
                                <td>
                                    <input type="number" placeholder="Insira o valor do item">
                                </td>

                            </tr>
                            <tr>
                                <td>Price</td>
                                <td> $ ${infoItem.misc.price.toLocaleString("pt-BR")}</td>
                                <td></td>

                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        
        `
    }
});

const calc = selectElement();
const { tdMinValue, tdMaxValue, inputMinValue, inputMaxValue } = calc;
// const danoItemMin = tdMinValue.innerText.trim().split(" - ");

//Funcao que transforma o texto do html em array e remove os espaços para ser usado no calculo.
function danoItemSplit(valorDanoItem) {
    const danoItem = valorDanoItem.innerText.trim().split(" - ");
    return danoItem;
}

//instacia da funcao que separa os valores do html e transforma em array.
const danoMinItem = danoItemSplit(tdMinValue)
const danoMaxItem = danoItemSplit(tdMaxValue)

// funcao que cria a logica e faz o calculo do valor do item e apresenta no html.
function CalculaDanoItem(ElementHtml, danoItemBD, danoItemInput) {

    ElementHtml.style.color = "";
    const result = parseInt(danoItemInput.value) - parseInt(danoItemBD[1]);

    if (result < 0) {
        ElementHtml.style.color = "red";
        ElementHtml.innerHTML = String(result);
    } else {
        ElementHtml.style.color = "green";
        ElementHtml.innerHTML = String(result);
    }
    return result
}

//Altera o css do campo colocando uma borda vermelha
function errorCampoVazio(selecaoImput) {
    selecaoImput.style.borderColor = "red";
}

//Ativa o evento de mundaça nos campos do documento.
document.addEventListener("change", (e) => {

    if (e.target.id == "input-min-demage") {
        if (e.target.value == "") {
            errorCampoVazio(inputMinValue)
            return
        }
        CalculaDanoItem(tdMinValue, danoMinItem, inputMinValue)
    }
    if (e.target.id == "input-max-demage") {
        if (e.target.value == "") {
            errorCampoVazio(inputMaxValue)
            return
        }
        CalculaDanoItem(tdMaxValue, danoMaxItem, inputMaxValue);
    }
})