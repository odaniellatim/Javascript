import { writeFile, readFile } from "fs/promises"

const dataSource = "./data/list.json"

interface User {
    name: string
}

export const getContacts = async (): Promise<User[]> => {
    let list: User[] = []
    try {
        const data = await readFile(dataSource, { encoding: "utf-8" })
        const json = JSON.parse(data)
        list = json
    } catch (err) { }

    return list
}

export const createContact = async (name: string) => {
    let list: User[] = await getContacts()
    list.push({ name })
    const jsonData = JSON.stringify(list)
    await writeFile(dataSource, jsonData)
}

export const deleteContact = async (name: string) => {
    let list: User[] = await getContacts()
    list = list.filter((item) => {
        return item.name.toLowerCase() !== name.toLowerCase()
    })
    const jsonData = JSON.stringify(list)
    await writeFile(dataSource, jsonData)
}