const express =require('express');
//importando express

const app = express ();
//criando uma instancia do express

const morgan = require ('morgan');
//chamando morgan
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');

const rotaPedidos = require ('./routes/pedidos')


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//executando um callback pra de procedimento e monitorar enviando um log
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use((req, res, next)=>{
    res.header('Acces-Control-Alow-Origin','*'),
    res.header('Acces-Control-Allow-Header',
    'Origin, X-Requrested-With, Content=Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control=Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({});
    }
    next();
});
//Para quando não encontrar uma rota entrar diretamente aqui
app.use((req, res, next)=> {
    const erro = new Error('Não encontrado')
    erro.status = (404);
    next(erro);
});

app.use((error, req, res, next)=> {
    //se não for definido sera:
    res.status(error.status || 500)
    return res.send({
        erro:{
            message: error.message
        }
    })
});





module.exports = app;
//exportar o app
