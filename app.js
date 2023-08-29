const express =require('express');
//(importando)Pegando o express que ja foi instalado anteriormente 

const app = express ();
//criando uma instancia do express

const rotaProdutos = require('./routes/produtos');

const rotaPedidos = require ('./routes/pedidos')

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaProdutos);




module.exports = app;
//exportar o app
