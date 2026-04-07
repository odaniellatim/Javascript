import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { errorhandler, notFoundRequest } from "./routes/errorhandler";
import { interferir } from "./middlewares/intervir";

const server = express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, "../public")))

//server.use(interferir)

server.use("/", router)
server.use(notFoundRequest)
server.use(errorhandler)

server.listen(3000, () => {
    console.log("Servidor está rodando: http://localhost:3000")
})