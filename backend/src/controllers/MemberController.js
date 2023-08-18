const { Member } = require('../models/MembersModel');

exports.findAll = async (req, res) => {
  try {
    const list = await Member.all();

    res.status(200).send(list);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};
