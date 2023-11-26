const { accessMock } = require('../mock/accessMock');
const { AccessModel, PerfilModel, PerfilAccess } = require('./migrations');

exports.inicializarCenario = async () => {
  await PerfilModel.create({
    descricao: 'Full access'
  });

  for(let obj of accessMock) {
    await AccessModel.create(obj);
    await PerfilAccess.create({
      idPerfil: 1,
      acess: '' + obj.code
    });
  }
};
