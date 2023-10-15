const { UserModel, ProjModel, ProjUserModel, PerfilModel } = require('./migrations');

class Proj {
  constructor(body) {
    this.body = body;
    this.proj = null;
  }

  async create() {
    this.cleanUp();

    if(!this.body.idCriador) throw new Error('É necessário um usuário atrelado a criação do projeto.');

    const user = await UserModel.findOne({
      where: { id: this.body.idCriador }
    });

    if(!user) throw new Error('Não foi encontrado nenhum usuário atrelado a este ID.');

    this.proj = await ProjModel.create(this.body);
  }

  async update() {

  }

  async findOne(id, include=null) {
    const array = [];
    if(include) {
      if(include.contains('members')) array.push(ProjUserModel);
    }

    include = array;

    this.proj = await ProjModel.findOne({ where: { id }, include: include });

    if(!this.proj) throw new Error('Não existe nenhum projeto atrelado a este ID.');

    return this.proj;
  }

  async findAll(idUser, include) {
    const array = [];
    if(include) {
      if(include.contains('proj')) array.push(ProjModel);
      if(include.contains('user')) array.push(UserModel);
      if(include.contains('perfil')) array.push(PerfilModel);
    }
    include = array;


    this.proj = 
        (!idUser) ?
          await ProjUserModel.findAll({
            include: include
          }) :
          await ProjUserModel.findAll({
            where: {
              idUser: idUser
            },
            include: include
          });

    if(!this.proj.length > 0) throw new Error('Não foi encontrado nenhum projeto criado');

    return this.proj;
  }

  // Garante que tudo que vier no formulário seja uma string
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    this.body = {
      nome: this.body.nome,
      descricao: this.body.descricao,
      status: this.body.status,
      idCriador: this.body.idCriador ? this.body.idCriador : null,
    };
  }
}

exports.Proj = Proj;
