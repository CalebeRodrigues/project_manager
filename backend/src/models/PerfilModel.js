const { PerfilModel, AcessModel, AuthModel } = require('./migrations');

const { AuthCodesMock } = require('../mock/auth_code');

async function createInitialValues() {
  const auth = [];

  const perfil = await PerfilModel.create({
    nome: 'Full acess'
  });

  for(let obj of AuthCodesMock) {
    auth.push(await AuthModel.create(obj));
  }

  for (let item of auth) {
    await AcessModel.create({
      idPerfil: perfil.id,
      idAuthCode: item.id
    });
  }
}

// createInitialValues();  

class Perfil {
  constructor(body) {
    this.body = body;
    this.perfil = null;
    this.auth = null;
  }

  async createPerfil() {
    this.cleanUp('perfil');

    this.perfil = await PerfilModel.create(this.body);
  }

  async updatePerfl(id) {
    this.cleanUp('perfil');
    this.perfil = await PerfilModel.findByPk(id);

    if(!this.perfil) throw new Error('Não existe nenhum perfil atrelado a este ID.');

    this.perfil.nome = this.body.nome;
  }

  async atribuirAuthCode(idPerfil, idAuthCode) {
    this.perfil = await PerfilModel.findByPk(idPerfil);
    this.auth = await AuthModel.findByPk(idAuthCode);

    if(!this.perfil) throw new Error('Não existe nenhum perfil atrelado a este ID.');
    if(!this.auth) throw new Error('Não existe nenhum auth code atrelado a este ID.');

    const acess = await AcessModel.findOne({ where: { idPerfil, idAuthCode } });

    if(acess) throw new Error('Este código já foi atribuido a este perfil!');

    await AcessModel.create({
      idPerfil,
      idAuthCode
    });

    this.perfil = await PerfilModel.findOne({
      where: { id: idPerfil },
      include: [
        {
          model: AcessModel,
          required: true,
          include: {
            model: AuthModel,
            required: true
          }
        }
      ],
    });
  }
  
  // Garante que tudo que vier no formulário seja uma string
  cleanUp(option) {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    if(option === 'perfil') {
      this.body = {
        nome: this.body.nome,
      };
    }
    else if(option === 'auth') {
      this.body = {
        nome: this.body.nome,
        descricao: this.body.descricao,
      };
    }
  }


  // Metodos Static
  static async findById(id) {
    return await PerfilModel.findOne({
      where: { id },
      include: [
        {
          model: AcessModel,
          required: true,
          include: {
            model: AuthModel,
            required: true
          }
        }
      ],
    });
  }

  static async all() {
    return await PerfilModel.findAll({
      include: [
        {
          model: AcessModel,
          required: true,
          include: {
            model: AuthModel,
            required: true
          }
        }
      ],
    });
  }
}

module.exports.Perfil = Perfil;
