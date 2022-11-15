const listaProdutos = () => {
    return fetch(`http://localhost:3000/profile`).then((resposta) => {
      return resposta.json();
    });
  };
  
  const produtoService = {
    listaProdutos,
  };
  
  const criaNovaLinha = (url, nome, preco, id) => {
    const linhaNovoCliente = document.createElement("tr");
    const conteudo = `
            <li class="galeria__opcao--item page-produto">
            <div>
              <img
                class="galeria__opcao-produto teste"
                src="${url}"
                alt=""
              />
              <div class="testando">
                <img src="../icons/lapis.png" class="icon" alt="" />
                <img src="../icons/lixeira.png" class="icon" alt="" id="btnDelete" onclick="deletarProduto()"/>
              </div>
            </div>
            <p class="galeria__opcao-titulo">${nome}</p>
            <span class="galeria__opcao-preco">&#36; ${preco}</span>
            <p>#${id}</p>
          </li> 
          `;
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
  };
  
  
  const tabela = document.querySelector("[data-lista]");
  
  produtoService.listaProdutos()
  .then((data) => {
    console.log(data);
    data.forEach((elemento) => {
        //Percorre o db.jason e adiciona o elemento dentro do filho, utilizando a primeira arrow function acima.
        tabela.appendChild(criaNovaLinha(elemento.url, elemento.nome, elemento.preco, elemento.id));
      });
  });