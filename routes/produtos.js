const express = require ('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next)=>{
    res.status(200).send({
        mesagem:'Usando o GET dentro da rota de produtos'
    });
});
// INSERE UM PRODUTO
router.post('/',(req, res, next) => {
    res.status(201).send({
        mesagem:'Usando POST dentro da rota de produtos'
    });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto',(req, res, next) => {
    const id = req.params.id_produto

    if (id=== 'especial'){

        res.status(200).send({
            mesagem:'Você descobriu  o ID especial',
            id:id
        })

    }else{
        res.status(200).send({
            mesagem:'Você passou um ID '
        });
    }

  
});

router.patch('/',(req, res, next) => {
    res.status(201).send({
        mesagem:'Usando patch dentro da rota de produtos'
    });
});

router.delete('/',(req, res, next) => {
    res.status(201).send({
        mesagem:'Usando DELETE dentro da rota de produtos'
    });
});

module.exports = router;