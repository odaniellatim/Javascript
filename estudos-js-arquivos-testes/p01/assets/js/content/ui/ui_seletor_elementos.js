//MENU GLOBAL LATERAL
export const menuHome = document.querySelector("#menu-home")
export const menuOrcamentoFinal = document.querySelector("#menu-orcamento-final")
export const menuMaoDeObra = document.querySelector("#menu-mao-de-obra")
export const menuListaMateriais = document.querySelector("#menu-lista-materiais")
export const menuCustoFixo = document.querySelector("#menu-custo-fixo")
export const menuRendaMensal = document.querySelector("#menu-renda-mensal")

//CONTEUDO GLOBAL: Conteudo principal
export const cHome = document.querySelector("#home")
export const cOrcamentoFinal = document.querySelector("#orcamento-final")
export const cMaoDeObra = document.querySelector("#mao-de-obra")
export const cListaMateriais = document.querySelector("#lista-materiais")
export const cCustoFixo = document.querySelector("#custo-fixo")
export const cRendaMensal = document.querySelector("#renda-mensal")

/**
 * 
 * Seção relacionada a area de custo fixo
 * 
 */

//CUSTO FIXO:  Elementos selecionados "CUSTO FIXO" Botão e Area de conteudo
export const btnAdicionar = document.querySelector("#btn-add-custo-fixo")
export const btnListar = document.querySelector("#btn-listar-custo-fixo")
export const divListarCustoFixo = document.querySelector("#listar-custo-fixo")
export const divCadastrarCustoFixo = document.querySelector("#cadastro-custo-fixo")
export const divAtualizarCustoFixo = document.querySelector("#update-custo-fixo")

//CUSTO FIXO: Seleção dos itens com os resultado do valor total e média dos custos fixos
export const pValorTotalCustoFixo = document.querySelector("#valor-total-custo-fixo")
export const pValorMedioCustoFixo = document.querySelector("#valor-medio-custo-fixo")

//CUSTO FIXO: Seleção dos inputs de cadastros
export const inputNomeCustoFixo = document.querySelector(".form-nome-custo-fixo")
export const inputValorCustoFixo = document.querySelector(".form-valor-custo-fixo")
export const inputStatusCustoFixo = document.querySelector(".form-status-custo-fixo")
export const inputDurabilidadeCustoFixo = document.querySelector(".form-durabilidade-custo-fixo")

//CUSTO FIXO: Seleção dos inputs de update
export const inputUpdateNomeCustoFixo = document.querySelector("#update-input-nome")
export const inputUpdateValorCustoFixo = document.querySelector("#update-input-valor")
export const inputUpdateStatusCustoFixo = document.querySelector(".update-input-status-custo-fixo")
export const inputUpdateDurabilidadeCustoFixo = document.querySelector("#update-input-durabilidade")
export const inputUpdateIdHidden = document.querySelector("#id-custo-fixo")

//CUSTO FIXO: Elemento da Tabela para listar os itens cadastrados
export const tbodyCustoFixo = document.querySelector("#tbody-custo-fixo")
export const spanTotalItensCadastradosCustoFixo = document.querySelector("#total-itens-custo-fixo")
export const inputSearchCustoFixo = document.querySelector("#input-search-custo-fixo")

//CUSTO FIXO: Seleção do Botão de cadastro / Update
export const btnAddCustoFixo = document.querySelector("#cadastrar-custo-fixo")
export const btnUpdateCustoFixo = document.querySelector("#btn-atualizar-custo-fixo")


/**
 *
 * TAGS HTML SELECIONADAS DA SEÇÃO RENDA MENSAL
 *
*/

// RENDA MENSAL: INPUT FORMULARIO
export const inputRendaMensalValor = document.querySelector("#input-renda-mensal-valor")
export const inputRendaMensalDias = document.querySelector("#input-renda-mensal-dias")
export const inputRendaMensalHoras = document.querySelector("#input-renda-mensal-horas")
export const inputRendaMensalProjetos = document.querySelector("#input-renda-mensal-projetos")

// RENDA MENSAL: DIV RESULTADOS HTML
export const divRendaMensalMediaProjeto = document.querySelector("#renda-mensal-media-projeto")
export const divRendaMensalRendaMinuto = document.querySelector("#renda-mensal-renda-minuto")
export const divRendaMensalRendaHora = document.querySelector("#renda-mensal-renda-hora")

// RENDA MENSAL: BOTÃO DE ATUALIZAR DADOS
export const btnRendaMensal = document.querySelector("#btn-renda-mensal")