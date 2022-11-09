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
  produtoCompleto.remove()
}
