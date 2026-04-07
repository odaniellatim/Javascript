import { tbodyCustoFixo, btnAddCustoFixo, loadItemsLocaStorageCustoFixo, inputSearchCustoFixo, inputSearchCustoFixoFn, btnAddCustoFixoFn, tbodyCustoFixoFn, btnUpdateCustoFixo, updateDataNovosDados } from "./content/app.js"

loadItemsLocaStorageCustoFixo("custo_fixo")

// Eventos das ações da seção custo fixo
btnAddCustoFixo.addEventListener("click", btnAddCustoFixoFn)
tbodyCustoFixo.addEventListener("click", tbodyCustoFixoFn)
inputSearchCustoFixo.addEventListener("change", inputSearchCustoFixoFn)
btnUpdateCustoFixo.addEventListener("click", tbodyCustoFixoFn)



