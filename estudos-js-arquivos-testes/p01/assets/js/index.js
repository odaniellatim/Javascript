import { BD_CUSTO_FIXO_GLOBAL, BD_RENDA_MENSAL_GLOBAL } from "./content/bd/bd_global.js"
import { tbodyCustoFixo, btnAddCustoFixo, loadItemsLocaStorageCustoFixo, inputSearchCustoFixo, inputSearchCustoFixoFn, btnAddCustoFixoFn, tbodyCustoFixoFn, btnUpdateCustoFixo, btnRendaMensal, eventRendaMensalUpdate, } from "./content/app.js"


loadItemsLocaStorageCustoFixo("custo_fixo", BD_CUSTO_FIXO_GLOBAL)
loadItemsLocaStorageCustoFixo("renda_mensal", BD_RENDA_MENSAL_GLOBAL)

// Eventos das ações da seção custo fixo
btnAddCustoFixo.addEventListener("click", btnAddCustoFixoFn)
tbodyCustoFixo.addEventListener("click", tbodyCustoFixoFn)
inputSearchCustoFixo.addEventListener("change", inputSearchCustoFixoFn)
btnUpdateCustoFixo.addEventListener("click", tbodyCustoFixoFn)

// Eventos das ações da seção de Renda Mensal
btnRendaMensal.addEventListener("click", eventRendaMensalUpdate)



