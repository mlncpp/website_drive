const Inscricao = require("../models/Inscricao");

exports.createInscricao = async (req, res) => {
  const inscricao = new Inscricao({
    nome: req.body.nome,
    email: req.body.email,
    ocupacao: req.body.ocupacao,
    instituicao: req.body.instituicao,
  });

  try {
    await inscricao.save();
    res.status(201).send(inscricao);
  } catch (e) {
    res.status(400).send(e);
  }
};

