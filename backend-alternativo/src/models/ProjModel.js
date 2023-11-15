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
    
    await ProjUserModel.create({
      idUser: user.id,
      idProj: this.proj.id,
      idPerfil: 1
    });
  }

  async update(id) {
    this.cleanUp();
    const projTemp = await ProjModel.findOne({where: { id }});

    if(!projTemp) throw new Error('Não foi encontrado um projeto atrelado a este id');

    await projTemp.update({
      ...this.body
    });

    await projTemp.save();

    this.proj = projTemp;
  }

  async includeMember (idUser) {
    const user = await UserModel.findOne({ where: { id: idUser } });

    if(!user) throw new Error('Não foi encontrado nenhum usuário atrelado a este ID.');
    
    this.proj = await ProjModel.findOne({ where: { id: this.body.idProj } });

    if(!this.proj) throw new Error('Não foi encontrado nenhum projeto atrelado a este ID.');

    const teste = await ProjUserModel.findOne({ where: {
      idUser: user.id,
      idProj: this.proj.id
    } });

    if (teste) return teste;

    const member = await ProjUserModel.create({
      idUser: user.id,
      idProj: this.proj.id,
      idPerfil: Number(this.body.idPerfil)
    });

    if(!member) throw new Error('Ocorreu um erro na criação do usuário.');

    return member;
  }

  async isMember(idUser, idProj) {
    const member = await ProjUserModel.findOne({
      where: {
        idUser,
        idProj
      }
    });

    if(!member) throw new Error('Este usuário não é membro do projeto especificado.');

    return true;
  }

  async findMembers(idProj) {
    const members = await ProjUserModel.findAll({
      where: { idProj }, include: [{
        model: UserModel,
        attributes: ['id', 'nome', 'email']
      }]
    });

    if(!members) throw new Error('Não existem membros no projeto referenciado.');

    return members;
  }

  async findOne(id, include=null) {
    include = (include) ? include : '';

    this.proj = !(include.includes('members')) ?
      await ProjModel.findOne({ where: { id }}) :
      await ProjUserModel.findAll({ where: {
        idProj: id
      }, include: [UserModel, PerfilModel] });

    if(!this.proj) throw new Error('Não existe nenhum projeto atrelado a este ID.');

    return this.proj;
  }

  async findAll(idUser, include) {
    const array = [];
    if(include) {
      if(include.includes('proj')) array.push(ProjModel);
      if(include.includes('user')) array.push(UserModel);
      if(include.includes('perfil')) array.push(PerfilModel);
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
