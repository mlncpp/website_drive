const Photo = require("../models/Galeria");

exports.createPhoto = async (req, res) => {
  const photo = new Photo({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    ano: req.body.ano,
    photo: req.body.photo
    });

    try 
    {
    await photo.save();
    res.status(201).send(photo);
    } catch (e) {
    res.status(400).send(e);
    }
    };


exports.getAllPhotos = async (req, res) => {
  try {
    const photo = await Photo.find({});
    res.send(photo);
  } catch (e) {
    res.status(500).send();
  }
};


exports.getPhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findById(id);

    if (!photo) {
      return res.status(404).send();
    }

    res.send(photo);
  } catch (e) {
    res.status(500).send();
  }
};


exports.updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    const updatedPhoto = await Photo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedPhoto) {
      res.json({
        message: "Foto atualizada com sucesso",
        document: updatedPhoto,
      });
    } else {
      res.status(404).json({ error: "Foto nao encontrada" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    // Lógica para excluir a foto usando o ID fornecido
    await Photo.findByIdAndDelete(id);
    res.sendStatus(200); // Envia uma resposta de sucesso
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envia uma resposta de erro
  }
};


/*
exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    const deletedPhoto = await Photo.findByIdAndDelete(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (deletedPhoto) {
      res.json({
        message: "Foto removida com sucesso",
        document: deletedPhoto,
      });
    } else {
      res.status(404).json({ error: "Foto nao encontrada" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

*/

/*
exports.createPhoto = async (req, res) => {
  const photo = new Photo({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    ano: req.body.ano,
    photo: 
    {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.photo)),
      contentType: 'image/png'
    }});
    try 
    {
    await photo.save();
    res.status(201).send(photo);
    } catch (e) {
    res.status(400).send(e);
    }
    };

*/


/*

exports.getAllFotos = async (req, res) => {
  try {
    const inscricoes = await Inscricao.find({});
    res.send(inscricoes);
  } catch (e) {
    res.status(500).send();
  }
};

exports.getFoto = async (req, res) => {
  try {
    const { id } = req.params;
    const inscricao = await Inscricao.findById(id);

    if (!inscricao) {
      return res.status(404).send();
    }

    res.send(inscricao);
  } catch (e) {
    res.status(500).send();
  }
};


exports.updateFoto = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    const updatedInscricao = await Inscricao.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedInscricao) {
      res.json({
        message: "Inscricao atualizada com sucesso",
        document: updatedInscricao,
      });
    } else {
      res.status(404).json({ error: "Inscricao nao encontrada" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


*/