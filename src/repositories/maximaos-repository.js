const mongoose = require('mongoose');
const Maximaos = mongoose.model('Maximaos');

exports.listMaximaos = async () => {
  const res = await Maximaos.find({}, 'nome geo_latitude geo_longitude endereco Motivo ');
  return res;
};

exports.createMaximaos = async data => {
  const maximaos = new Maximaos(data);
  await maximaos.save();
};

exports.deleteMaximaos = async id => {
  await Maximaos.findOneAndRemove(id);
};