import "./card.css";

interface CardProps {
    fabricante: string,
    modelo: string,
    lote: string,
    quantidade: number,
    preco: number,
    desconto: number,
    urlImagem: string
};

export function Card({ fabricante, modelo, lote, quantidade, preco, desconto, urlImagem }: CardProps) {
    return (
        <div className="card">
            <img src={urlImagem}></img>
            <h2>{fabricante}</h2>
            <h2>{modelo}</h2>
            <h3>{lote}</h3>
            <h4>{quantidade}</h4>
            <p><b>Preço: R$</b>{preco}</p>
            <p><b>Desconto: -R$</b>{desconto}</p>
        </div>
    );
};
