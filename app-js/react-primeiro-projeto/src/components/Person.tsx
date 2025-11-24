type Props = {
    name: String;
    avatar: String;
    roles: String[];
}

export const Person = ({ name, avatar, roles }: Props) => {

    return (
        <>
            <div className="w-70 border-2 p-4 m-3 rounded-md border-gray-300  bg-gray-50">
                <h1 className="text-2xl font-bold mb-1 text-center">{name}</h1>
                <img
                    src={avatar}
                    alt="Elon Musk"
                    className="w-70 rounded-md"
                />
                <ul className="p-2">
                    {roles.map((value, index) => (<li key={index}>{value}</li>))}

                </ul>
            </div >
        </>
    )
}