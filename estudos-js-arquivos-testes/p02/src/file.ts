import { readFile, writeFile, unlink } from "fs/promises"

interface Usuario {
    id: number;
    nome: string;
}

// Escrever arquivos
const exec = async () => {
    console.log("Escrevendo o arquivo")

    const list: Usuario[] = [
        { id: 1, nome: "Boot" },
        { id: 2, nome: "Leona" },
        { id: 3, nome: "Pitu" },
    ]
    const listTxt = JSON.stringify(list)

    await writeFile("./teste.json", listTxt)

    console.log("Arquivo concluido.")
}

// Ler arquivos
const readFIle = async () => {
    const fileContent = await readFile("./teste.json", { encoding: "utf-8" })
    const list = JSON.parse(fileContent)

    list.forEach(({ id, nome }: Usuario) => {
        console.log(id, nome)
    })
}

exec()
readFIle()