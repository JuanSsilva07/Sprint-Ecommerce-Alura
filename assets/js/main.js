/* Reitrando a configuração de envio de Form e retirando os valores. */

const formularioRodape = document.querySelector(".rodape__contato-form");
formularioRodape.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deu certo");
  txtName.value = "";
  txtMensagem.value = "";
});

/* Aplicando máscara para inserir o valor corretamente no campo de inserção. */

const args = {
  afterFormat(e) {
    console.log("afterFormat", e);
  },
  allowNegative: false,
  beforeFormat(e) {
    console.log("beforeFormat", e);
  },
  negativeSignAfter: false,
  prefix: "R$ ",
  suffix: "",
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ",",
  thousandsSeparator: ".",
  cursor: "end",
};

// Select the element
const input = SimpleMaskMoney.setMask("#txtPreco", args);
// Convert the input value to a number, which you can save e.g. to a database:
input.formatToNumber();

/* Realizando a exclusão do produto. */

function deletarProduto() {
  const elementoProduto = document.querySelector("#btnDelete");
  const produtoIcons = elementoProduto.parentElement;
  const produtoDiv = produtoIcons.parentElement;
  const produtoCompleto = produtoDiv.parentElement;
  produtoCompleto.remove();
}

/* Fazendo uso do DB */

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
              src="https://img.elo7.com.br/product/zoom/3A08683/barra-de-chocolate-recheada-chocolate-recheado.jpg"
              alt=""
            />
            <div class="testando">
              <img src="../icons/lapis.png" class="icon" alt="" />
              <img src="../icons/lixeira.png" class="icon" alt="" id="btnDelete" onclick="deletarProduto()"/>
            </div>
          </div>
          <p class="galeria__opcao-titulo">Produto XYZ</p>
          <span class="galeria__opcao-preco">&#36; 60,00</span>
          <p>#111111111</p>
        </li> 
        `;
  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};


const tabela = document.querySelector("[data-lista]");

produtoService.listaProdutos()
.then((data) => {
  console.log(data);
});