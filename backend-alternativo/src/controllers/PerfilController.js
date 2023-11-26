const { Perfil } = require('../models/PerfilModel');

exports.create = async (req, res) => {
  const model = new Perfil(req.body, req.body.access);
  try {
    await model.create();

    res.status(200).send(model.perfil);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.all = async (req, res) => {
  const model = new Perfil();
  try {
    await model.findAll();

    res.status(200).send(model.perfil);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findAllAccess = async (req, res) => {
  const model = new Perfil();
  try {
    await model.findAllAccess();

    res.status(200).send(model.access);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
