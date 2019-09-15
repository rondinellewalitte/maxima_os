const mongoose = require('mongoose');
const Maximaos = mongoose.model('Maximaos');

// list
exports.listMaximaos = async (req, res) => 
{
  try 
  {
    const data = await Maximaos.find({});
    res.status(200).send(data);
  } 
  catch (e) 
  {
    res.status(500).send({message: 'Falha ao carregar as visitas.'});
  }
  
};

// create
exports.createMaximaos = async (req, res) => 
{
  try 
  {
        const maximaos = new Maximaos(
        {
          Nome: req.body.nome,
          geo_latitude: req.body.geo_latitude,
          geo_longitude: req.body.geo_longitude,
          endereco: req.body.endereco,
          Motivo: req.body.motivo
        });

         console.log(maximaos)

        await maximaos.save();

        res.status(201).send({message: 'Visita cadastrada com sucesso!'});
  } 
  catch (e) 
          {
            res.status(500).send({message: 'Falha ao cadastrar a visita.'});
          }
  
};