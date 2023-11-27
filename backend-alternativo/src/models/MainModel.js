const { accessMock } = require('../mock/accessMock');
const { AccessModel, PerfilModel, PerfilAccess } = require('./migrations');

exports.inicializarCenario = async () => {
  await PerfilModel.create({
    descricao: 'Full access'
  });
  
  await PerfilModel.create({
    descricao: 'Analista'
  });

  await PerfilModel.create({
    descricao: 'Operador'
  });

  for(let obj of accessMock) {
    await AccessModel.create(obj);
    await PerfilAccess.create({
      idPerfil: 1,
      acess: '' + obj.code
    });
  }

  await PerfilAccess.create({
    idPerfil: 2,
    acess: '' + accessMock[0].code
  });

  await PerfilAccess.create({
    idPerfil: 2,
    acess: '' + accessMock[1].code
  });

  await PerfilAccess.create({
    idPerfil: 2,
    acess: '' + accessMock[3].code
  });
};
