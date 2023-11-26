const { inicializarCenario } = require('../models/MainModel');

exports.inicializaCenario = async (req, res) => {
  try {
    await inicializarCenario();

    res.status(200).send({ message: 'Cenário iniciado com sucesso!'});
  }
  catch(e) {
    res.status(400).send(e.message);
  }
};