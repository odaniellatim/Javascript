import express from "express"

const router = express.Router()

router.post("/", (req, res) => {
    res.json({ produtos: [] })
})

router.get("/", (req, res) => {
    res.json({ produtos: [] })
})

router.get("/:id", (req, res) => {
    console.log(req.params)
    res.json({ nome: "produto1", prico: 123.90 })
})

export default router