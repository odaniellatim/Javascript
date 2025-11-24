
type placeholder = {
    textPlaceholder: string;
    type: string;
    valueInput: string;
    fnChange?: () => string | number | void;
}

export const Input = ({ textPlaceholder, type, valueInput, fnChange }: placeholder) => {
    return (
        <>
            <input
                className="border border-gray-200 m-2 p-2 rounded bg-white"
                type={type}
                placeholder={textPlaceholder}
                value={valueInput}
                onChange={fnChange}
            />
        </>
    );
}