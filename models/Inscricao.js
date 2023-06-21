const mongoose = require("mongoose");

const inscricaoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  ocupacao: String,
  instituicao: String,
},
{
  collection: 'DriveInscricoes'
}
);

const Inscricao = mongoose.model("Inscricao", inscricaoSchema);
module.exports = Inscricao;

