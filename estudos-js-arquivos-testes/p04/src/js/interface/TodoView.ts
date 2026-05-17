import { ElementosHTML } from "../types/ElementosDom";
import { Task } from "../types/Task";

export interface ElementosDOM {
    elementos: ElementosHTML,
    valueInput: () => void,
    htmlTodoItem: (item: Task[]) => void,
    limparInput: () => void,
    focoInput: () => void,
    nenhumItemListado: () => string,
    expandirDescricao: (elementoClicado: HTMLElement) => void,
    itemLength: (totalItens: number) => string,
    alertSuccess: (menssage: string, color: string, time: number) => void
}