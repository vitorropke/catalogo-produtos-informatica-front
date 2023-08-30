import { useState } from "react";
import "./App.css"
import { Card } from "./components/card/card";
import { useProdutoData } from "./hooks/useProdutoData";
import { CreateModal } from "./components/create-modal/create-modal";

function App() {
  const { data } = useProdutoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="container">
      <h1>Catálogo de produtos de informática</h1>
      <div className="card-grid">
        {data?.map(produtoData =>
          <Card
            fabricante={produtoData.fabricante}
            modelo={produtoData.modelo}
            lote={produtoData.lote}
            quantidade={produtoData.quantidade}
            preco={produtoData.preco}
            desconto={produtoData.desconto}
            urlImagem={produtoData.urlImagem}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Cadastrar produto</button>
    </div>
  );
};

export default App;
