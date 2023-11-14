const { Comentarios } = require('../models/ComentariosModel');

exports.create = async (req, res) => {
  try {
    const model = new Comentarios(req.body);

    await model.create();

    res.status(200).send(model.comentario);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.update = async (req, res) => {
  try {
    const model = new Comentarios(req.body);

    await model.update(req.params.id);

    res.status(200).send(model.comentario);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findOne = async (req, res) => {
  try {
    const model = new Comentarios(req.body);

    await model.findOne(req.params.id);

    res.status(200).send(model.comentario);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const model = new Comentarios(req.body);

    await model.findAll(req.params.idAtividade);

    res.status(200).send(model.comentario);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
