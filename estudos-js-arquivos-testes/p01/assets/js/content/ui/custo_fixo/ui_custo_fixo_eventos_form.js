import { btnAdicionar, btnListar, divCadastrarCustoFixo, divListarCustoFixo, divAtualizarCustoFixo } from "../ui_seletor_elementos.js"

// Configuração do botão de Adicionar Custo Fixo
btnAdicionar.addEventListener("click", () => {
    // Adiciona e remove a classe de ocultar area de visualização
    divCadastrarCustoFixo.classList.remove("d-none")
    divAtualizarCustoFixo.classList.add("d-none")
    divListarCustoFixo.classList.add("d-none")

})

// Configuração do botão de Listar Custo Fixo
btnListar.addEventListener("click", () => {
    // Adiciona e remove a classe de ocultar area de visualização
    divListarCustoFixo.classList.remove("d-none")
    divCadastrarCustoFixo.classList.add("d-none")
    divAtualizarCustoFixo.classList.add("d-none")

})

