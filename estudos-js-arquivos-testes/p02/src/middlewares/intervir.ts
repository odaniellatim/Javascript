import { RequestHandler } from "express"

export const interferir: RequestHandler = (req, res, next) => {
    const loggin = true

    if (loggin) {
        next()
    } else {
        return res.json({ error: "Usuario nao autenticado" })
    }

}