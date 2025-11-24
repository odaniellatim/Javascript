import { useState, useRef } from "react";
import { TodoItem } from "@/types/TodoItem";

export function Todo() {
    const [itemInput, setItemInput] = useState("");
    const refInput = useRef<HTMLInputElement>(null);

    const [list, setList] = useState<TodoItem[]>([
        { label: "Fazer o dever de casa", checked: false },
        { label: "Comprar Pão", checked: true },
    ]);

    const addItem = () => {
        if (itemInput.trim() === "") return;

        setList([
            ...list,
            { label: itemInput, checked: false }
        ]);
        setItemInput("");
        refInput.current?.focus();
    }

    const deleteItem = (index: number) => {
        setList(
            list.filter((item, key) => key !== index)
        );
    }

    const toggleItem = (index: number) => {
        let newList = [...list];

        for (let i in newList) {
            if (index === parseInt(i)) {
                newList[i].checked = !newList[i].checked;
            }
        }
        setList(newList)
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-400">

                <input
                    type="text"
                    placeholder="O que deseja fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3 bg-white "
                    value={itemInput}
                    onChange={e => setItemInput(e.target.value)}
                    ref={refInput}
                />
                <button onClick={addItem} className="text-white cursor-pointer">Adicionar</button>
            </div>

            <p className="my-4">{list.length} items na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {
                    list.map((item, index) => (
                        <li key={index}>
                            <input
                                onClick={() => toggleItem(index)}
                                type="checkbox"
                                defaultChecked={item.checked}
                                className="w-6 h-6 mr-3"
                            />

                            {item.label} -

                            <button
                                onClick={() => deleteItem(index)}
                                className="houver:underline">[ deletar ]
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div >
    );

}