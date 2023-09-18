const { UserModel } = require('./migrations');
const bcryptjs = require('bcryptjs');

const validator = require('validator');

class User {
  constructor(body) {
    this.body = body;
    this.user = null;
  }

  async register() {
    if (!this.valida()) {
      throw new Error('Email inválido!');
    }

    const testeUser = await UserModel.findOne({ where: { email: this.body.email } });

    if (testeUser) throw new Error('Email já cadastrado!');
      
    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

    this.user = await UserModel.create(this.body);
  }

  async login() {
    if (!this.valida()) {
      throw new Error('Email inválido!');
    }

    this.user = await UserModel.findOne({
      where: { 
        email: this.body.email,
      }
    });

    this.user = (this.user != null && !(bcryptjs.compareSync(this.body.senha, this.user.senha))) ? null : this.user;
      
    if (this.user == null) {
      throw new Error('Email ou senha incorretos!');
    }
  }

  async update(id) {
    if (!this.valida()) {
      throw new Error('Email inválido!');
    }

    const usuario = await UserModel.findByPk(id);

    if (usuario == null) {
      throw new Error('Usuário não encontrado');
    }

    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

    usuario.nome = this.body.nome,
    usuario.email = this.body.email,
    usuario.senha = this.body.senha,
    await usuario.save();

    this.user = usuario;
  }

  json() {
    return this.user.toJSON();
  }
  
  valida() {
    this.cleanUp();
      
    if(!validator.isEmail(this.body.email)){
      return false;
    }
      
    return true;        
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
      email: this.body.email,
      senha: this.body.senha,
    };
  }


  // Metodos Static
  static async allUser() {
    const users = await UserModel.findAll();
    if(!(users.length != 0)) throw new Error('Não existe nenhum usuário criado no sistema.');
    return users;
  }

  static async findUser(id) {
    const user = await UserModel.findByPk(id);
    if(!user) throw new Error('Não existe nenhum usuário atrelado a este ID.');

    return user;
  }

  static async deleteUser(id) {
    const user = await this.findUser(id);

    const json = user.toJSON();

    await user.destroy();

    return json;
  }
}

module.exports.User = User;
