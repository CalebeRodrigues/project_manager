const { MemberModel, UserModel, ProjModel, PerfilModel } = require('./migrations');

class Member {

  static async insert(idUser, idProj, idPerfil) {
    const proj = await ProjModel.findByPk(idProj);
    if(!proj) throw new Error('Não existe nenhum projeto atrelado a este ID.');

    const perfil = await PerfilModel.findByPk(idPerfil);
    if(!perfil) throw new Error('Não existe nenhum perfil de acesso atrelado a este ID.');

    const user = await UserModel.findByPk(idUser);
    if(!user) throw new Error('Não existe nenhum usuário atrelado a este ID.');
    
    return await MemberModel.create({
      idUser,
      idProj,
      idPerfil
    });
  }

  static async update(id, idPerfil) {
    const member = await MemberModel.findByPk(id);
    if(!member) throw new Error('Não foi encontrado nenhum membro atrelado a este usuário.');

    if (member.idPerfil == idPerfil) return member;

    const perfil = await PerfilModel.findByPk(idPerfil);
    if(!perfil) throw new Error('Não existe nenhum perfil de acesso atrelado a este ID.');

    await member.update({
      idPerfil
    });

    return member;
  }
  
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
  static async all(idUser=undefined) {
    const membersProj = (!idUser) ? await MemberModel.findAll({ include: [UserModel, ProjModel, PerfilModel] })
      : await MemberModel.findAll({ include: [ProjModel, PerfilModel], where: { idUser } });
    return membersProj;
  }
}

module.exports.Member = Member;
