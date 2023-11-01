import { useEffect, useState } from 'react';
import { EtapaCollapse } from '../../components/EtapaCollapse';
import { Api } from '../../services/api';
import * as Styles from './style';

export const Project = () => {
  const [etapas, setEtapas] = useState(null);

  const findEtapas = async () => {
    try {
      const resp = await Api.get('/etapas/1');

      setEtapas(resp.data);
    } catch (e) {
      setEtapas(null);
    }
  };

  useEffect(() => {
    findEtapas();
  }, []);

  return (
    <Styles.Container className="container p-3">
      <div>
        <h1 className="mb-1">Projeto nome</h1>
      </div>
      <div className="row mt-4">
        {etapas ? (
          etapas.map((etapa) => {
            return (
              <EtapaCollapse
                key={etapa.id}
                options={{
                  id: etapa.id,
                  nome: etapa.nome,
                }}
              />
            );
          })
        ) : (
          <div className="container mt-4" style={{ textAlign: 'center' }}>
            <h2>Nenhuma etapa foi criada para este projeto</h2>
          </div>
        )}
      </div>
    </Styles.Container>
  );
};
