var mongoose = require('mongoose');

const programaSchema = new mongoose.Schema({
  titulo: String,
  dia: String,
  hora: String,
  descricao: String,
  photo: String,
},
{
  collection: 'DrivePrograma'
}
);


const Programa = mongoose.model("Programa", programaSchema);
module.exports = Programa;


