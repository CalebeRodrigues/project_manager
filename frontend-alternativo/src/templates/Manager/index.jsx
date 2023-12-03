import { useEffect, useState } from 'react';
import { AccordionPerfil } from '../../components/AccordionPerfil';
import { Api } from '../../services/api';
import { PerfilModal } from '../../components/PerfilModal';

export const Manager = () => {
  const [perfis, setPerfis] = useState(null);

  const [reloadModal, setReloadModal] = useState(false);

  const findPerfis = async () => {
    try {
      const resp = await Api.get(`/access/all`);

      setPerfis(resp.data);
    } catch (e) {
      setPerfis(null);
    }
  };

  useEffect(() => {
    findPerfis();
  }, []);

  return (
    <div>
      <div className="row">
        <h1 className="mt-3">Lista de perfis</h1>
        <div className="col">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#perfilModal"
            onClick={() => setReloadModal(true)}
          >
            Criar
          </button>
        </div>

        <div className="container mt-4">
          <div className="accordion p-3" id="accordionExample">
            {perfis &&
              perfis.map((perfil) => (
                <AccordionPerfil
                  key={perfil.id}
                  data={{
                    id: perfil.id,
                    nome: perfil.descricao,
                    acessosPerfil: perfil.access,
                  }}
                />
              ))}
          </div>
        </div>
        <PerfilModal reload={[reloadModal, setReloadModal]} />
      </div>
    </div>
  );
};
