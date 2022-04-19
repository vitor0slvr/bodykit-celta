import express from "express";

const app = express();


// --------------------------------------------------
// GET => buscar informacao 
// POST => isnerir/criar uma informacao dentro da API
// PUT => alterar informacao (usuario, email, senha, endereco, telefone)
// DELETE => remover informacao, dados, usuario ou produtos
// PATCH => alterar informacao especifica (alterar somente o usuario, senha, endereco etc)
// ---------------------------------------------------

// test

app.get("/test", (request, response) => {
  
  // request => tudo que entra
  // response => tudo que sai
  
  return response.send("ola nub")
});

app.post("/test-post", (request, response) => {
  return response.send ("Ola veinho metodo pOST")
});

app.listen(3000, () => console.log("server is running"));


// teste