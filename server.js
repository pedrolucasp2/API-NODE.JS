const http = require('http');
//criando uma var http parao projeto
const app = require('./app')
//importando o para o app server

const port = process.env.PORT || 3000
//Definindo uma porta de serviço
const server = http.createServer(app);
//Criando servidor 
//passando para o server todo conteudo de app.js

server.listen(port);
//Definindo onde vai ser ouvida a porta no caso a 3000 criada 
