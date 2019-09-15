const { validationResult } = require('express-validator');

const repository = require('../repositories/maximaos-repository');


// list
exports.listMaximaos = async (req, res) => 
{
  try 
  {
    const data = await repository.listMaximaos();
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
  const {errors} = validationResult(req);
  
  if(errors.length > 0) {
    return res.status(400).send({message: errors});
  }

  try 
  {
        await repository.createMaximaos(
        {
          nome: req.body.nome,
          geo_latitude: req.body.geo_latitude,
          geo_longitude: req.body.geo_longitude,
          endereco: req.body.endereco,
          motivo: req.body.motivo
        });


        res.status(201).send({message: 'Visita cadastrada com sucesso!'});
  } 
  catch (e) 
          {
            res.status(500).send({message: 'Falha ao cadastrar a visita.'});
          }
  
};

//update

exports.updateMaximaos = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors});}
  

  try {
    await repository.updateMaximaos(req.params.id, req.body);
    return res.status(200).send({
      message: 'Visita atualizada com sucesso!'
    });
  } catch (e) {
    return res.status(500).send({message: 'Falha ao atualizar a visita.'});
  }
  
};

// delete
exports.deleteMaxiamos= async (req, res) => {
  try {
    await repository.deleteMaximaos(req.params.id);
    res.status(200).send({
      message: 'Visita removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover a Visita.'});
  }
  
};