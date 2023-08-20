const { MemberModel, UserModel, ProjModel, PerfilModel } = require('./migrations');

class Member {
  constructor(body) {
    this.body = body;
    this.member = null;
  }

  //   async update(id) {

  //   }
  
  //   // Garante que tudo que vier no formulário seja uma string
  //   cleanUp() {
  //     for (const key in this.body) {
  //       if (typeof this.body[key] !== 'string') {
  //         this.body[key] = '';
  //       }
  //     }

  //     this.body = {
  //       nome: this.body.nome,
  //       email: this.body.email,
  //       senha: this.body.senha,
  //     };
  //   }


  // Metodos Static
  static async all() {
    return MemberModel.findAll({ include: [UserModel, ProjModel, PerfilModel] });
  }
}

module.exports.Member = Member;
