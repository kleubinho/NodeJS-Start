import {http} from 'node:http'

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    //Early return => se o código bater no return abaixo, na que vem depois será executado
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users)); //end para retornar um texto
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "KLeber",
      email: "kleber@gmail.com",
    });

    return response.writeHead(201).end();
  }

  return response.writeHead(404).end();
});

server.listen(3333);
