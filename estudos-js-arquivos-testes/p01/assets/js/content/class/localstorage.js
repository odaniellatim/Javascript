export class Local_storage {

    static saveLocalStorage(NAME_LOCAL_STORAGE, DATA_LOCAL_STORAGE) {
        const bd = JSON.stringify(DATA_LOCAL_STORAGE)
        localStorage.setItem(NAME_LOCAL_STORAGE, bd)
        // console.log("Dados Salvos")
    }

    static lerLocalStorage(NAME_LOCAL_STORAGE) {
        const bd = localStorage.getItem(NAME_LOCAL_STORAGE)
        const load_data = JSON.parse(bd)
        return load_data
    }

}