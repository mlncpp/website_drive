const express = require("express");
const inscricaoController = require("../controllers/inscricaoController");
const router = express.Router();

//router.get("/", driveController.getAllInscricoes);
router.post("/", inscricaoController.createInscricao);

//router.get("/:id", driveController.getInscricoes);
//router.put("/:id", driveController.updateInscricoes);

//router.get("/galeria", driveController.getAllGaleria);
//router.post("/newphoto", driveController.createPhoto);


module.exports = router;