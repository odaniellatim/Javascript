"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, express_1.default)();
server.use((0, helmet_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use("/", routes_1.default);
server.listen(3000, () => {
    console.log("Servidor rodando: http://localhost:3000");
});
//# sourceMappingURL=server.js.map