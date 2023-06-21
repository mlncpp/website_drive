var mongoose = require('mongoose');

const galeriaSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  ano: String,
  photo: String,
},
{
  collection: 'DriveGaleria'
}
);


const Galeria = mongoose.model("Galeria", galeriaSchema);
module.exports = Galeria;


