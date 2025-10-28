//arquivos de classes importadas
import { RegistroMolde } from "./RegistroMolde.js";

const btnRegistrar = document.querySelector("#btn-registrar");

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Click Funcioanndo")
})

//Instacia dos objeetos
const newItem = new RegistroMolde("Coração", 300);
const newItem2 = new RegistroMolde("Esmalte", 150);
const newItem3 = new RegistroMolde("Estrela", 100);

//funcoes do objeto
const obj = newItem.itemsList();
newItem.horaTrabalho = 3;
console.log("Valor R$ " + newItem.custoBorracha().toFixed(2).replace(".", ","))

const obj2 = newItem2.itemsList();
obj2["hora-trabalho"] = 5;
console.log("Valor R$ " + newItem2.custoBorracha().toFixed(2).replace(".", ","))

const obj3 = newItem3.itemsList();
obj3["hora-trabalho"] = 1;
console.log("Valor R$ " + newItem3.custoBorracha().toFixed(2).replace(".", ","))

//imprimindo dados no console
console.log(obj);
console.log(obj2);
console.log(obj3);