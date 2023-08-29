const express =require('express');
//(importando)Pegando o express que ja foi instalado anteriormente 

const app = express ();
//criando uma instancia do express

app.use((req, res, next) =>{
    res.status(200).send ({
        mensagem: 'OK, Deus certo'
    })
    
})


module.exports = app;
//exportar o app
