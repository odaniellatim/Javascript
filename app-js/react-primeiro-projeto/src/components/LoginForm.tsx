import { Welcome } from "./Welcome";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormEvent, useState } from "react";

export const FormLogin = () => {

    const [userInput, setUserInput] = useState("");
    const [passInput, setpassInput] = useState("");

    const fnOnclickLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`User: ${userInput}`);
        console.log(`Pass: ${passInput}`);
    }
    const fnOnclickRegister = (event: FormEvent) => {
        event.preventDefault();
        console.log(`Conta Criada...`);
    }

    return (
        <div className="ranting flex flex-col justify-center items-center">
            <Welcome />
            <form>
                <div className="bg-gray-100 p-4 rounded border border-gray-200 mt-4">

                    <div className="flex flex-col p-2">
                        <Input
                            textPlaceholder="Email"
                            type="text"
                            valueInput={userInput}
                            fnChange={e => setUserInput(e.target.value)}
                        />
                        <Input
                            textPlaceholder="Password"
                            type="password"
                            valueInput={passInput}
                            fnChange={e => setpassInput(e.target.value)} />
                    </div>

                    <div className="flex gap-2 mt-4 align-center justify-center">

                        <Button nameButton="Login" fnOnClick={fnOnclickLogin} />
                        <Button nameButton="Sign up" fnOnClick={fnOnclickRegister} />
                    </div>
                </div>
            </form>
        </div>
    );
}