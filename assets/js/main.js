const formularioRodape = document.querySelector("#formEnvio");
formularioRodape.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Deu certo")
  txtName.value = '';
  txtMensagem.value = '';
})

const inputs = document.querySelectorAll("input")

inputs.forEach((input) => {
  if (input.dataset.tipo === "preco") {
    SimpleMaskMoney.setMask(input, {
      prefix: "R$ ",
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ",",
      thousandsSeparator: ".",
      cursor: "end",
    })
  }

  input.addEventListener("blur", (evento) => {
    valida(evento.target)
  })
})