const express = require("express");
const galeriaController = require("../controllers/galeriaController");
const router = express.Router();

router.get("/", galeriaController.getAllPhotos);
router.post("/", galeriaController.createPhoto);

router.get("/:id", galeriaController.getPhoto);
router.put("/:id", galeriaController.updatePhoto);
router.delete("/photo/:id", galeriaController.deletePhoto);

module.exports = router;