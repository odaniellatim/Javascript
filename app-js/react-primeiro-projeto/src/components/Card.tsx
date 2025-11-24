import { Autour_One } from "next/font/google";
import { ReactNode } from "react"

type ChildItems = {
    id?: number;
    headline: string;
    description: string | string[];
    author?: string
}

export const Card = ({ id, headline, description, author }: ChildItems) => {
    return (
        <div key={id} className="border-gray-200 p-5 m-5 rounded-b-lg border-2">
            <h2 className="font-bold text-2xl"> {headline}</h2>
            <p>{description}</p>
            {author &&
                <p className="italic">{author ?? "Autor Desconhecido"}</p>
            }
            {!author &&
                <p className="italic">Autor Desconhecido</p>
            }

        </div>
    )
}