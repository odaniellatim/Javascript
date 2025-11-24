type Alert = {
    fullname: string;
    fnAlert: (element: boolean) => boolean;
}

export const ViewName = ({ fullname, fnAlert }: Alert) => {
    return (
        <>
            {alert && fullName.name && fullName.lastname &&
                < div className="bg-green-200 p-6 m-6 rounded-md">Cadastrado com sucesso: {fullName.name} {fullName.lastname}</div>
            }

            {!fullName.name && !fullName.lastname && alert &&
                < div className="bg-red-200 p-6 m-6 rounded-md">Erro Campos Vazios{fullName.name} {fullName.lastname}</div>
            }
        </>

    );

}