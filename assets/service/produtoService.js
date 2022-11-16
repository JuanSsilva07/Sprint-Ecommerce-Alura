const listaProdutos = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
};

const criaCliente = async (url, categoria, nome, preco, descricao) => {
  const resposta = await fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url,
      categoria: categoria,
      nome: nome,
      preco: preco,
      descricao: descricao,
    }),
  });
  return resposta.body;
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
    return resposta.json();
  });
};

const atualizaCliente = (url, categoria, nome, preco, descricao, id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      url: url,
      categoria: categoria,
      nome: nome,
      preco: preco,
      descricao: descricao,
    }),
  }).then((resposta) => {
    return resposta.json();
  });
};

export const produtoService = {
  listaProdutos,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
