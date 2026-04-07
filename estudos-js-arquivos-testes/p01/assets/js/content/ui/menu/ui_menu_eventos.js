import { menuHome, menuOrcamentoFinal, menuMaoDeObra, menuListaMateriais, menuCustoFixo, menuRendaMensal, cHome, cOrcamentoFinal, cMaoDeObra, cListaMateriais, cCustoFixo, cRendaMensal } from "../ui_seletor_elementos.js"

cOrcamentoFinal.classList.add("d-none")
cMaoDeObra.classList.add("d-none")
cListaMateriais.classList.add("d-none")
cCustoFixo.classList.add("d-none")
cRendaMensal.classList.add("d-none")

menuHome.classList.add("list-group-item-danger")

menuHome.addEventListener("click", () => {
    cHome.classList.remove("d-none")
    cOrcamentoFinal.classList.add("d-none")
    cMaoDeObra.classList.add("d-none")
    cListaMateriais.classList.add("d-none")
    cCustoFixo.classList.add("d-none")
    cRendaMensal.classList.add("d-none")

    menuHome.classList.add("list-group-item-danger")
    menuOrcamentoFinal.classList.remove("list-group-item-danger")
    menuMaoDeObra.classList.remove("list-group-item-danger")
    menuListaMateriais.classList.remove("list-group-item-danger")
    menuCustoFixo.classList.remove("list-group-item-danger")
    menuRendaMensal.classList.remove("list-group-item-danger")
})

menuOrcamentoFinal.addEventListener("click", () => {
    cHome.classList.add("d-none")
    cOrcamentoFinal.classList.remove("d-none")
    cMaoDeObra.classList.add("d-none")
    cListaMateriais.classList.add("d-none")
    cCustoFixo.classList.add("d-none")
    cRendaMensal.classList.add("d-none")

    menuHome.classList.remove("list-group-item-danger")
    menuOrcamentoFinal.classList.add("list-group-item-danger")
    menuMaoDeObra.classList.remove("list-group-item-danger")
    menuListaMateriais.classList.remove("list-group-item-danger")
    menuCustoFixo.classList.remove("list-group-item-danger")
    menuRendaMensal.classList.remove("list-group-item-danger")
})

menuMaoDeObra.addEventListener("click", () => {
    cHome.classList.add("d-none")
    cOrcamentoFinal.classList.add("d-none")
    cMaoDeObra.classList.remove("d-none")
    cListaMateriais.classList.add("d-none")
    cCustoFixo.classList.add("d-none")
    cRendaMensal.classList.add("d-none")

    menuHome.classList.remove("list-group-item-danger")
    menuOrcamentoFinal.classList.remove("list-group-item-danger")
    menuMaoDeObra.classList.add("list-group-item-danger")
    menuListaMateriais.classList.remove("list-group-item-danger")
    menuCustoFixo.classList.remove("list-group-item-danger")
    menuRendaMensal.classList.remove("list-group-item-danger")
})

menuListaMateriais.addEventListener("click", () => {
    cHome.classList.add("d-none")
    cOrcamentoFinal.classList.add("d-none")
    cMaoDeObra.classList.add("d-none")
    cListaMateriais.classList.remove("d-none")
    cCustoFixo.classList.add("d-none")
    cRendaMensal.classList.add("d-none")

    menuHome.classList.remove("list-group-item-danger")
    menuOrcamentoFinal.classList.remove("list-group-item-danger")
    menuMaoDeObra.classList.remove("list-group-item-danger")
    menuListaMateriais.classList.add("list-group-item-danger")
    menuCustoFixo.classList.remove("list-group-item-danger")
    menuRendaMensal.classList.remove("list-group-item-danger")
})

menuCustoFixo.addEventListener("click", () => {
    cHome.classList.add("d-none")
    cOrcamentoFinal.classList.add("d-none")
    cMaoDeObra.classList.add("d-none")
    cListaMateriais.classList.add("d-none")
    cCustoFixo.classList.remove("d-none")
    cRendaMensal.classList.add("d-none")

    menuHome.classList.remove("list-group-item-danger")
    menuOrcamentoFinal.classList.remove("list-group-item-danger")
    menuMaoDeObra.classList.remove("list-group-item-danger")
    menuListaMateriais.classList.remove("list-group-item-danger")
    menuCustoFixo.classList.add("list-group-item-danger")
    menuRendaMensal.classList.remove("list-group-item-danger")
})

menuRendaMensal.addEventListener("click", () => {
    cHome.classList.add("d-none")
    cOrcamentoFinal.classList.add("d-none")
    cMaoDeObra.classList.add("d-none")
    cListaMateriais.classList.add("d-none")
    cCustoFixo.classList.add("d-none")
    cRendaMensal.classList.remove("d-none")

    menuHome.classList.remove("list-group-item-danger")
    menuOrcamentoFinal.classList.remove("list-group-item-danger")
    menuMaoDeObra.classList.remove("list-group-item-danger")
    menuListaMateriais.classList.remove("list-group-item-danger")
    menuCustoFixo.classList.remove("list-group-item-danger")
    menuRendaMensal.classList.add("list-group-item-danger")
})