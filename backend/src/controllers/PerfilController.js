const { Perfil } = require('../models/PerfilModel');

exports.atribuirAuthCode = async (req, res) => {
  try {
    const model = new Perfil(req.body);
    const idPerfil = req.params.idPerfil;
    const idAuthCode = req.params.idAuthCode;

    await model.atribuirAuthCode(idPerfil, idAuthCode);
    
    res.status(200).send(model.perfil);
  }
  catch(e) {
  
    res.status(400).send(e.message);
  }
};

exports.findOne = async (req, res) => {
  try {
    const model = await Perfil.findById(req.params.id);
    res.status(200).send(model);
  }
  catch(e) {

    res.status(400).send(e.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const list = await Perfil.all();

    res.status(200).send(list);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};