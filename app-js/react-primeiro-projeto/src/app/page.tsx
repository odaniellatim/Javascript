"use client"
import { ReactElement, useRef, useState } from "react";

type PropText = {
  text: string;
}
function Headline({ text }: PropText) {
  return (
    <p className="font-bold text-3xl underline">{text}</p>
  );
}

type Button = {
  nome: string;
  fn: () => void;
}

function Button({ nome, fn }: Button) {
  return (
    <button onClick={fn} className="bg-blue-700 text-white p-3 rounded-md cursor-pointer">{nome}</button>
  );
}
type List = {
  obj: string[];
}
function List({ obj }: List) {

  return (
    <>
      {obj.length > 0 ?
        obj.map((value, index) => (
          <>
            <p key={index}>{index}. {value}</p>
          </>
        )) :
        "Nenhum Item Cadastrado"
      }

    </>
  );
}

const resetInput = (item: string, time: number) => {
  setInterval(() => {
    item.current.style.border = null;
  }, time);
}

function Page() {

  const buttoName = "BTN "
  const [change, setChange] = useState<string[]>([]);
  const [texto, setTexto] = useState<string>("");
  const colorError = useRef(null)

  const AddItem = (value: string) => {
    const valueItem = value;
    if (valueItem) {
      setChange([
        ...change,
        valueItem,
      ]);
      colorError.current.style.border = "";
    } else {
      colorError.current.style.border = '2px solid red'
    }

    setTexto("");
  }

  const ChangeInput = (e: ReactElement) => {
    const txt = e.target.value
    setTexto(txt)

  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl gap-4">
      <Headline text="Anotações!!" />

      <input ref={colorError} onChange={ChangeInput} type="text" value={texto} className="border border-gray-200 p-2" />

      <Button nome={buttoName} fn={() => AddItem(texto)} />

      <span>
        <List obj={change} />

      </span>


    </div >

  );

}

export default Page;