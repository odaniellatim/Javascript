type btn = {
    nameButton: string;
    fnOnClick: () => void;
}
export const Button = ({ nameButton, fnOnClick }: btn) => {

    return (
        <>
            <button onClick={fnOnClick} className="bg-blue-600 text-white p-2 pl-6 pr-6 rounded-md ml-2 cursor-pointer">{nameButton}</button>
        </>
    );
}