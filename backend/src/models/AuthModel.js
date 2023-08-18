const { AuthModel } = require('./migrations');

class Auth {
  constructor(body){
    this.auth = null;
    this.body = body;

    this.cleanUp();
  }

  async create() {
    this.auth = await AuthModel.create(this.body);
  }

  async update(id) {
    this.auth = await AuthModel.findOne({ where: { id } });

    if(!this.auth) throw new Error('Não foi encontrado nenhum projeto com este ID.');

    this.auth.nome = this.body.nome;
    this.auth.descricao = this.body.descricao;

    await this.auth.save();
  }

  async delete(id) {
    const projDel = await AuthModel.findOne({ where: { id } });

    if(!projDel) throw new Error('Nâo foi encontrado nenhum projeto atrelado a este ID.');

    this.auth = await projDel.destroy();
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
      
    this.body = {
      nome: this.body.nome,
      descricao: this.body.descricao
    };
  }

  static async findOne(id) {
    const auth = await AuthModel.findOne({ where: { id } });

    if(!auth) throw new Error('Não existe nenhum código de autenticação atrelado a este ID.');

    return auth;
  }

  static async findAll() {
    const projs = await AuthModel.findAll();

    if(!(projs.length > 0)) throw new Error('Não existem codigos de autenticação criados.');

    return projs;
  }
}

exports.Auth = Auth;
