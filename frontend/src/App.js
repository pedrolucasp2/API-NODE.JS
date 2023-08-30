import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("/produtos") // Rota para buscar produtos
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error("Erro:", error));

    fetch("/pedidos") // Rota para buscar pedidos
      .then((response) => response.json())
      .then((data) => setPedidos(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div className="App">
      <h1>Frontend da Aplicação</h1>
      <div>
        <h2>Produtos</h2>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id_produto}>{produto.nome}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Criar Novo Produto</h2>
        <form>
          <label>Nome do Produto:</label>
          <input type="text" name="nome" />

          <label>Preço do Produto:</label>
          <input type="number" name="preco" />

          <button type="submit">Criar Produto</button>
        </form>
      </div>

      <div>
        <h2>Pedidos</h2>
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id_pedidos}>Pedido {pedido.id_pedidos}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Criar Novo Pedido</h2>
        <form>
          <label>ID do Produto:</label>
          <input type="text" name="id_produto" />

          <label>Quantidade:</label>
          <input type="number" name="quantidade" />

          <button type="submit">Criar Pedido</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
