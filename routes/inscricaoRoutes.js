const express = require("express");
const inscricaoController = require("../controllers/inscricaoController");
const router = express.Router();

router.post("/", inscricaoController.createInscricao);

module.exports = router;