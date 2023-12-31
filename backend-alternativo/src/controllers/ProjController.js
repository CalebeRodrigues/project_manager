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

exports.isMember = async (req, res) => {
  try {
    const model = new Proj(req.body);

    res.status(200)
      .send(await model.isMember(req.params.idUser, req.query.idProj));
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.includeMembers = async (req, res) => {
  try {
    const model = new Proj(req.body);

    res.status(200).send(await model.includeMember(req.params.idUser));
  }
  catch(e) {
    res.status(400).send(e.message);
  }  
};

exports.members = async (req, res) => {
  try {
    const model = new Proj(req.body);

    res.status(200).send(await model.findMembers(req.params.idProj));
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
