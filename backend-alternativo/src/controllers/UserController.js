const { User } = require('../models/UserModel');

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.register();

    res.status(200).send(user.json());
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.login = async (req, res) => {
  try {        
    const user = new User(req.body);

    await user.login();

        
    res.status(200).send(user.json());
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.update = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.update(req.params.id);

    res.status(200).send(user.json());
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await User.deleteUser(req.params.id);

    res.status(200).send(user);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.allUser();

    res.status(200).send(users);
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};

exports.findUserById = async (req, res) => {
  try {
    const user = await User.findUser(req.params.id);

    res.status(200).send(user.toJSON());
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};