const { Activity } = require('../models/ActivityModel');

exports.create = async (req, res) => {
  try {
    const model = new Activity(req.body);

    await model.create();

    res.status(200).send(model.atividade);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.update = async (req, res) => {
  try {
    const model = new Activity(req.body);

    await model.update(req.params.id);

    res.status(200).send(model.atividade);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findOne = async (req, res) => {
  try {
    const model = new Activity(req.body);

    await model.findOne(req.params.id);

    res.status(200).send(model.atividade);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const model = new Activity(req.body);

    await model.findAll(req.params.idEtapa);

    res.status(200).send(model.atividade);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
