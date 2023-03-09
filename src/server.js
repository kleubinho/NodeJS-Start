const http = require("http");

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if(method === 'GET' && url === '/users'){
    //Early return => se o código bater no return abaixo, na que vem depois será executado
    return response.end('Listagem de usuários') //end para retornar um texto
  }

  if(method === 'POST' && url === '/users'){
    return response.end('Criação de usuários')
  }
  
  return response.end("Hello World");
});

server.listen(3333);
