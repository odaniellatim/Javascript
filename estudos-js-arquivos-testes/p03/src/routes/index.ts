import express from "express"
import { createContact, deleteContact, getContacts } from "../services/contact"

const router = express.Router()

router.post("/contato", async (req, res) => {
    const { name } = req.body
    if (!name || name.length < 2) {
        res.status(400).json({
            error: "Nome precisa ter pelo menos 2 caracteres"
        })
    }
    await createContact(name)
    res.status(201).json({ contato: name })
})

router.get("/contatos", async (req, res) => {
    let list = await getContacts()
    res.json(list)
})

router.delete("/contato", async (req, res) => {
    const { name } = req.query
    if (!name) {
        return res.json({ error: "precisa mandar um nome para ecluir." })
    }
    await deleteContact(name as string)
    res.json({ contato: name })
})

export default router
