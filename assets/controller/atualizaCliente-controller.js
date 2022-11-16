import { produtoService } from "../service/produtoService.js";

/* Os códigos abaixo fazem com que seja exibido na tela de edição os dados que constam no DB.json */

const pegaURL = new URL(window.location);

console.log(pegaURL);

const id = pegaURL.searchParams.get("id");

console.log(id);

const inputURL = document.querySelector("[data-url]");
const inputCategoria = document.querySelector("[data-categoria]");
const inputNome = document.querySelector("[data-nome]");
const inputPreco = document.querySelector("[data-preco]");
const inputDescricao = document.querySelector("[data-descricao]");

produtoService.detalhaCliente(id).then((dados) => {
  inputURL.value = dados.url;
  inputCategoria.value = dados.categoria;
  inputNome.value = dados.nome;
  inputPreco.value = dados.preco;
  inputDescricao.value = dados.descricao;
});

const formulario = document.querySelector("[data-form]");

/* Enviando as informações atualizadas */

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  produtoService
    .atualizaCliente(
      inputURL.value,
      inputCategoria.value,
      inputNome.value,
      inputPreco.value,
      inputDescricao.value,
      id
    )
    .then(() => {
      window.location.href = "../pages/produtoLogado.html";
    });
});

/* Aplicando máscara para inserir o valor corretamente no campo de inserção. */

const args = {
  afterFormat(e) {},
  allowNegative: false,
  beforeFormat(e) {},
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
