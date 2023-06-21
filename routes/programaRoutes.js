const express = require("express");
const programaController = require("../controllers/programaController");
const router = express.Router();

router.get("/", programaController.getAllSpeakers);
router.post("/", programaController.createSpeaker);

router.get("/:id", programaController.getSpeaker);
router.put("/:id", programaController.updateSpeaker);
router.delete("/speaker/:id", programaController.deleteSpeaker);

module.exports = router;