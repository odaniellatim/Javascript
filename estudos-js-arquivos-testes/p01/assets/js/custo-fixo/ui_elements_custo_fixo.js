// Elementos selecionados Botão e Area de conteudo
const btnAdicionar = document.querySelector("#btn-add-custo-fixo")
const btnListar = document.querySelector("#btn-listar-custo-fixo")
const divListarCustoFixo = document.querySelector("#listar-custo-fixo")
const divCadastrarCustoFixo = document.querySelector("#cadastro-custo-fixo")

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