const express = require('express');
const temaController = require('./controllers/temaController');
const usuarioController = require('./controllers/usuarioController');

const router = express.Router();

router.post('/temas', temaController.criarTema);
router.get('/temas', temaController.listarTemas);
router.put('/temas/:id', temaController.atualizarTema);
router.delete('/temas/:id', temaController.deletarTema);
router.get('/temas/:id', temaController.buscarTemaPorId);

router.post('/usuarios', usuarioController.criarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.deletarUsuario);
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);

module.exports = router;