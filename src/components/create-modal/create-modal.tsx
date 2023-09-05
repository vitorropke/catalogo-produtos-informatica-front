import { useEffect, useState } from "react";
import { useProdutoDataMutate } from "../../hooks/useProdutoDataMutate";
import { ProdutoData } from "../../interface/ProdutoData";

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void;
};

interface ModalProps {
    closeModal(): void;
};

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [fabricante, setFabricante] = useState("");
    const [modelo, setModelo] = useState("");
    const [lote, setLote] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [preco, setPreco] = useState(0.0);
    const [desconto, setDesconto] = useState(0.0);
    const [urlImagem, setUrlImagem] = useState("");

    const { mutate, isSuccess, isLoading } = useProdutoDataMutate();

    const submit = () => {
        const produtoData: ProdutoData = {
            fabricante,
            modelo,
            lote,
            quantidade,
            preco,
            desconto,
            urlImagem
        };

        mutate(produtoData);
    };

    useEffect(() => {
        if (!isSuccess) {
            return
        } else {
            return closeModal();
        }
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastro de produtos</h2>
                <form className="input-container">
                    <Input label="Fabricante" value={fabricante} updateValue={setFabricante} />
                    <Input label="Modelo" value={modelo} updateValue={setModelo} />
                    <Input label="Lote" value={lote} updateValue={setLote} />
                    <Input label="Quantidade" value={quantidade} updateValue={setQuantidade} />
                    <Input label="Preço" value={preco} updateValue={setPreco} />
                    <Input label="Desconto" value={desconto} updateValue={setDesconto} />
                    <Input label="URL da imagem" value={urlImagem} updateValue={setUrlImagem} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </div>
        </div>
    );
};
