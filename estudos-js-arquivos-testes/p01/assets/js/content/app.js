//Vaviaveis Globais
export let BD_GERAL_SYSTEM = []

export function setBD_GERAL_SYSTEM(NEWITEM) {
    BD_GERAL_SYSTEM = NEWITEM
}

// Classes rotas
//--------------------------------------------------------------------------------------------------------------
export * from "./class/custo_fixo.js"
export * from "./class/lista_items.js"
export * from "./class/orcamento_final.js"
export * from "./class/localstorage.js"
export * from "./class/localstorage.js"

// Elementos de interface
//--------------------------------------------------------------------------------------------------------------
export * from "./ui/ui_seletor_elementos.js"

// Eventos de Menu Principal
//--------------------------------------------------------------------------------------------------------------
export * from "./ui/menu/ui_menu_eventos.js"

// Eventos de Seção Custo Fixo
//--------------------------------------------------------------------------------------------------------------
export * from "./ui/custo_fixo/ui_custo_fixo_eventos_form.js"
export * from "./ui/custo_fixo/bd_load_data.js"

// Funções sistema
//--------------------------------------------------------------------------------------------------------------
export * from "./functions/functions.js"








