// const { Proj } = require('../models/ProjModel');

exports.findOne = async (req, res) => {
  const includes = req.query.include;

  console.log(includes);
  res.status(200).send(includes);
};
