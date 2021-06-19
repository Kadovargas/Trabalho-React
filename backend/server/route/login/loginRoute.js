const express = require('express');
const router = express.Router();
const loginService = require('../../service/login/loginService');

router.get('/login/:usuario/:senha', async function (req, res) {
   const usuario = req.params.usuario;
   const senha = req.params.senha;
   const result = await loginService.getLogin(usuario, senha);
   console.log(result);
});

module.exports = router;