const express = require ('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next)=>{
    res.status(200).send({
        mesagem:'retorna os pedidos'
    });
});
// INSERE UM pedidos
router.post('/',(req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mesagem:'pedido foi criado',

        pedidoCriado:pedido
    });
});

//RETORNA OS DADOS DE UM pedidos
router.get('/:id_pedidos',(req, res, next) => {
    const id = req.params.id_produto

    if (id=== 'especial'){

        res.status(200).send({
            mesagem:'detalhes do pedido',
            id_pedidos:id
        })

    }else{
        res.status(200).send({
            mesagem:'Você passou um ID '
        });
    }

  
});

//exclui um pedidos
router.delete('/',(req, res, next) => {
    res.status(201).send({
        mesagem:'Usando DELETE dentro da rota de pedidos'
    });
});

module.exports = router;