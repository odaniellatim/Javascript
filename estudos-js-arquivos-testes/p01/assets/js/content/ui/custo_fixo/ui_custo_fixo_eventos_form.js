import { btnAdicionar, btnListar, divCadastrarCustoFixo, divListarCustoFixo } from "../../app.js"

// Configuração do botão de Adicionar Custo Fixo
btnAdicionar.addEventListener("click", () => {
    // Adiciona e remove a classe de ocultar area de visualização
    divListarCustoFixo.classList.add("d-none")
    divCadastrarCustoFixo.classList.remove("d-none")
})

// Configuração do botão de Listar Custo Fixo
btnListar.addEventListener("click", () => {
    // Adiciona e remove a classe de ocultar area de visualização
    divListarCustoFixo.classList.remove("d-none")
    divCadastrarCustoFixo.classList.add("d-none")

})