const http = require('http');

const server = http.createServer((request, response) => {
    return response.end('Hello Recena')
})

server.listen(3333)