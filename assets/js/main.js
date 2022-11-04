const formularioRodape = document.querySelector("#formEnvio");
formularioRodape.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Deu certo")
  txtName.value = '';
  txtMensagem.value = '';
})