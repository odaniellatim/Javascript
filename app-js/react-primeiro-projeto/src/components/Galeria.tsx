import { galeriaList } from "@/data/galeriaList";
import { PhotoItem } from "./PhotoItem";
import { useState } from "react";
import { Modal } from "./Modal";

export const Galeria = () => {
    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState("");

    const openModal = (id: number) => {
        const photo = galeriaList.find(item => item.id === id);
        if (photo) {
            setImageOfModal(photo.url);
            setShowModal(true);
        }
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <div className="mx-2">
            <h1 className="text-center text-3xl font-bold my-10">Galeria de Fotos</h1>
            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galeriaList.map(value =>
                    <PhotoItem
                        key={value.id}
                        photo={value}
                        onClick={() => { openModal(value.id) }}
                    />
                )}
            </section>
            {
                showModal &&
                <Modal image={imageOfModal} closeModal={closeModal} />
            }
        </div>

    );

}