const { PerfilModel, AccessModel, PerfilAccess, ProjUserModel, UserModel, ProjModel } = require('./migrations');


class Perfil {
  constructor(body, access=null) {
    this.body = body;
    this.access = access;
    this.perfil = null;
  }

  async create() {
    this.cleanUp();

    this.perfil = await PerfilModel.create(this.body);

    if(this.access != null) {
      for(let obj of this.access) {
        if (await AccessModel.findOne({ where: { code: obj } })) {
          await PerfilAccess.create({
            idPerfil: this.perfil.id,
            acess: obj
          });
        }
      }
    }
  }

  async update() {
  }

  async findOne() {
  }

  async findAll() {
    this.perfil = await PerfilModel.findAll();

    if(!this.perfil.length > 0) throw new Error('Não existe nenhum perfil de acesso criado.');

    for(let obj of this.perfil) {
      const access = await PerfilAccess.findAll({
        attributes: [],
        include: [AccessModel],
        where: {
          idPerfil: obj.id
        }
      });

      const objAccess = [];

      for(let value of access) {
        objAccess.push(value.dataValues.access.dataValues.code);
      }
      obj.dataValues = {
        ...obj.dataValues,
        access: objAccess
      };
    }
  }

  async findAccessByUser(idProj, idUser) {
    const user = await UserModel.findOne({where: { id: idUser }});
    const proj = await ProjModel.findOne({ where: { id: idProj } });

    if(!user) throw new Error('Não foi encontrado nenhum usuário atrelado a este ID.');
    if(!proj) throw new Error('Não foi encontrado nenhum projeto atrelado a este ID.');

    const resp = await ProjUserModel.findOne({
      where: {
        idProj,
        idUser
      },
      include: [PerfilModel]
    });

    if(!resp) throw new Error('Usuário não encontrado no projeto');

    const access = await PerfilAccess.findAll({
      attributes: [],
      include: [AccessModel],
      where: {
        idPerfil: resp.dataValues.perfil.dataValues.id
      }
    });

    const objAccess = [];

    for(let value of access) {
      objAccess.push(value.dataValues.access.dataValues.code);
    }

    return objAccess;
  }

  async findAllAccess() {
    const access = await AccessModel.findAll({ attributes: ['code', 'descricao'] });

    if(!access.length > 0) throw new Error('Não existe nenhum code de acesso criado.');

    this.access = access;
  }

  // Garante que tudo que vier no formulário seja uma string
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      descricao: this.body.descricao
    };
  }
}

exports.Perfil = Perfil;
