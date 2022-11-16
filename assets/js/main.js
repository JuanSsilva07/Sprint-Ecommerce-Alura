/* Retirando a configuração de envio de Form e retirando os valores. */

const formularioRodape = document.querySelector(".rodape__contato-form");
formularioRodape.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Deu certo");
  txtName.value = "";
  txtMensagem.value = "";
});


