const Speaker = require("../models/Programa");

exports.createSpeaker = async (req, res) => {
  const speaker = new Speaker({
    titulo: req.body.titulo,
    dia: req.body.dia,
    hora: req.body.hora,
    descricao: req.body.descricao,
    photo: req.body.photo
    });

    try 
    {
    await speaker.save();
    res.status(201).send(speaker);
    } catch (e) {
    res.status(400).send(e);
    }
    };


exports.getAllSpeakers = async (req, res) => {
  try {
    const speaker = await Speaker.find({});
    res.send(speaker);
  } catch (e) {
    res.status(500).send();
  }
};


exports.getSpeaker = async (req, res) => {
  try {
    const { id } = req.params;
    const speaker = await Speaker.findById(id);

    if (!speaker) {
      return res.status(404).send();
    }

    res.send(speaker);
  } catch (e) {
    res.status(500).send();
  }
};


exports.updateSpeaker = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    const updatedSpeaker = await Speaker.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedSpeaker) {
      res.json({
        message: "Speaker atualizado com sucesso",
        document: updatedSpeaker,
      });
    } else {
      res.status(404).json({ error: "Speaker nao encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteSpeaker = async (req, res) => {
  try {
    const { id } = req.params;
    await Speaker.findByIdAndDelete(id);
    res.sendStatus(200); 
  } catch (error) {
    console.error(error);
    res.sendStatus(500); 
  }
};
