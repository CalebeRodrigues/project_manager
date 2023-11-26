import { useEffect, useState } from 'react';
import { AccordionPerfil } from '../../components/AccordionPerfil';
import { Api } from '../../services/api';

export const Manager = () => {
  const [perfis, setPerfis] = useState(null);

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
      </div>
    </div>
  );
};
