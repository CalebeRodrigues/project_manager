const { Etapa } = require('../models/EtapaModel');

exports.create = async (req, res) => {
  try {
    const model = new Etapa(req.body);

    await model.create();

    res.status(200).send(model.etapa);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findOne = async (req, res) => {
  try {
    const model = await Etapa.findOne(req.params.id);

    res.status(200).send(model);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const model = await Etapa.findAll();

    res.status(200).send(model);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.update = async (req, res) => {
  try {
    const model = new Etapa(req.body);
  
    await model.update(req.params.id);
  
    res.status(200).send(model.etapa);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const model = new Etapa(req.body);
    
    await model.delete(req.params.id);
    
    res.status(200).send(model.etapa);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
