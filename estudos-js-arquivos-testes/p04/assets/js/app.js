// app.js
import { TodoController } from "./controllers/TodoController.js"

document.addEventListener("DOMContentLoaded", () => {
    const init = new TodoController();
    init.startApp()
    // Outros controllers (RendaMensal, etc.)
});