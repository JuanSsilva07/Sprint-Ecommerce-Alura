import { produtoService } from "../service/produtoService.js";


/* ------------------------------------------- Cadastrando novo Produto ---------------------------------------------- */

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = evento.target.querySelector("[data-url]").value;
  const categoria = evento.target.querySelector("[data-categoria]").value;
  const nome = evento.target.querySelector("[data-nome]").value;
  const preco = evento.target.querySelector("[data-preco]").value;
  const descricao = evento.target.querySelector("[data-descricao]").value;

  produtoService.criaCliente(url, categoria, nome, preco, descricao).then(() => {
    window.location.href = "../pages/produtoLogado.html";
  });
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
