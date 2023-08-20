const { Member } = require('../models/MembersModel');

exports.insert = async (req, res) => {
  try {
    const { idUser, idProj, idPerfil } = req.params;

    const member = await Member.insert(idUser, idProj, idPerfil);

  
    res.status(200).send(member);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { id, idPerfil } = req.params;

    const member = await Member.update(id, idPerfil);

    res.status(200).send(member);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const list = await Member.all();

    res.status(200).send(list);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
