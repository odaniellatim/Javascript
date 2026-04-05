
const importar = document.querySelector("#importar")
const exportar = document.querySelector("#exportar")

importar.addEventListener("change", (e) => {
    let arquivo = e.currentTarget.files[0]
    console.log(arquivo.type)

    if (!arquivo) return;
    if (arquivo.type != "application/json") {
        e.target.value = ""
        alert("Erro: Envie um arquivo Json valido!")
        return
    }
    const leitor = new FileReader();

    leitor.onload = (levent) => {
        try {
            console.log(levent.target.result)
        } catch (erro) {
            alert("Erro ao carregar dados do arquivo")
            console.log(erro)
        }

    }

    // leitor.onload = (e) => {
    //     try {
    //         // Converte o texto de volta para objeto JavaScript
    //         const jsonImportado = JSON.parse(e.target.result);
    //         console.log("Dados importados com sucesso:", jsonImportado);
    //         alert("JSON importado! Veja o console.");
    //     } catch (erro) {
    //         alert("Erro ao ler o arquivo: Formato JSON inválido.");
    //     }
    // };

    leitor.readAsText(arquivo);

})
let data = [
    {
        "name": "odaniellatim",
        "lockfileVersion": 3,
        "requires": true,
        "packages": {}
    }

]
exportar.addEventListener("click", () => {
    // 1. Converte o objeto para string JSON
    const dataStr = JSON.stringify(data, null, 2);

    // 2. Cria um Blob (objeto de dados brutos)
    const blob = new Blob([dataStr], { type: "application/json" });

    // 3. Cria uma URL temporária para o Blob
    const url = URL.createObjectURL(blob);

    // 4. Cria um link temporário e clica nele
    const link = document.createElement('a');
    link.href = url;
    link.download = "dados.json";
    link.click();

    // 5. Limpa a memória
    URL.revokeObjectURL(url);
})