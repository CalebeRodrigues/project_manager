const { Proj } = require('../models/ProjModel');

exports.create = async (req, res) => {
  try {
    const model = new Proj(req.body);

    await model.create();

    res.status(200).send(model.proj);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.update = async (req, res) => {
  try {
    const model = new Proj(req.body);

    await model.update(req.params.id);

    res.status(200).send(model.proj);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findOne = async (req, res) => {
  const includes = req.query.include;
  try {
    const model = new Proj(req.body);

    await model.findOne(req.params.id, includes);

    res.status(200).send(model.proj);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
  res.status(200).send(includes);
};

exports.findAll = async (req, res) => {
  const includes = req.query.includes;

  try {
    const model = new Proj(req.body);

    await model.findAll(req.params.idUser, includes);

    res.status(200).send(model.proj);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
