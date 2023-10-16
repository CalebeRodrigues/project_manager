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

    }
    
}

exports.findOne = async (req, res) => {
  const includes = req.query.include;

  console.log(includes);
  res.status(200).send(includes);
};
