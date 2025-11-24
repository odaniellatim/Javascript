import { useState } from "react";
import { Button } from "./Button";
import { FormLogin } from "@/components/LoginForm";

export const Counter = () => {
    const [login, setLogin] = useState(false);

    const loginUser = () => {
        setLogin(!login);

    }

    return (
        <div>
            {login && <FormLogin />}
            <Button nameButton={login ? "Deslogar" : "Logar"} fnOnClick={loginUser} />
        </div>
    );
}