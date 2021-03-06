var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication');
var carrinhoController = require('../controller/carrinhoController');

/* Middleware de autenticação de Login */
router.use(authentication);

router.get('/', carrinhoController.carrinho);
router.post('/:id_produto', carrinhoController.adicionarNoCarrinho);
router.get('/produto/carrinho', carrinhoController.carrinho);
router.get('/remover/:id_produto', carrinhoController.removerProdutoCarrinho);
router.get('/limpar', carrinhoController.limparCarrinho);

module.exports = router;