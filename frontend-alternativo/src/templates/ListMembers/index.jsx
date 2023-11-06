import { useParams } from 'react-router-dom';
import { CardMember } from '../../components/CardMember';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import { useProject } from '../../context/Project/useProject';

export const ListMembers = () => {
  const [members, setMembers] = useState(null);
  const params = useParams();
  const projNav = useProject();

  const findUserProj = async () => {
    try {
      const resp = await Api.get(`/proj/${params.id}?include=members`);

      setMembers(resp.data);
    } catch (e) {
      setMembers(null);
    }
  };

  useEffect(() => {
    projNav.define(params.id);
    findUserProj();
  }, []);

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o e-mail do novo membro do projeto"
          aria-label="Digite o e-mail do novo membro do projeto"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
          Inserir
        </button>
      </div>

      {members &&
        members.map((obj) => (
          <CardMember
            key={obj.id}
            data={{
              id: obj.id,
              email: obj.user.email,
              nome: obj.user.nome,
              nivel: obj.perfil.descricao,
            }}
          />
        ))}
    </div>
  );
};
