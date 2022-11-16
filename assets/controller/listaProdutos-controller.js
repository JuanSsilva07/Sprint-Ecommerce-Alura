import { produtoService } from "../service/produtoService.js";

const criaNovaLinha = (url, nome, preco, id) => {
  const linhaNovoProduto = document.createElement("tr");
  const conteudo = `
            <li class="galeria__opcao--item page-produto">
            <div>
              <img
                class="galeria__opcao-produto teste"
                src="${url}"
                alt=""
              />
              <div class="testando">
                <li><button><a href="../pages/editar-produto.html?id=${id}"><img src="../icons/lapis.png" class="icon" alt="" /></a></button></li>
                <li><button class="botao-simples botao-simples--excluir" type="button"><img src="../icons/lixeira.png" class="icon botao-simples botao-simples--excluir" alt="" id="btnDelete"/></button><li>
              </div>
            </div>
            <p class="galeria__opcao-titulo">${nome}</p>
            <span class="galeria__opcao-preco">&#36; ${preco}</span>
            <p>#${id}</p>
          </li> 
          `;
  linhaNovoProduto.innerHTML = conteudo;
  linhaNovoProduto.dataset.id = id;
  return linhaNovoProduto;
};

const tabela = document.querySelector("[data-lista]");



tabela.addEventListener("click", async (evento) => {
  let ehBotaoDeDeleta =
    evento.target.className === "botao-simples botao-simples--excluir";
  if (ehBotaoDeDeleta) {
    const linhaCliente = evento.target.closest("[data-id]");
    console.log(linhaCliente);
    let id = linhaCliente.dataset.id;
    await produtoService.removeCliente(id);
    linhaCliente.remove();
  }
});



produtoService.listaProdutos().then((data) => {
  console.log(data);
  data.forEach((elemento) => {
    //Percorre o db.jason e adiciona o elemento dentro do filho, utilizando a primeira arrow function acima.
    tabela.appendChild(
      criaNovaLinha(elemento.url, elemento.nome, elemento.preco, elemento.id)
    );
  });
});
