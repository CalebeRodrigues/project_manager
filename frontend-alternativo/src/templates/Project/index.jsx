import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import * as Styles from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';
import { useProject } from '../../context/Project/useProject';
import { CardEtapa } from '../../components/CardEtapa';

export const Project = () => {
  const [etapas, setEtapas] = useState(null);
  const [projeto, setProjeto] = useState(null);
  const auth = useAuth();
  const projNav = useProject();
  const params = useParams();
  const navigate = useNavigate();

  const isMember = async () => {
    try {
      await Api.get(`/proj/member/${auth.token}?idProj=${params.id}`);
    } catch {
      navigate('/projetos');
    }
  };

  const findProject = async () => {
    try {
      const resp = await Api.get(`/proj/${params.id}`);

      setProjeto(resp.data);
    } catch (e) {
      setProjeto(null);
    }
  };

  const findEtapas = async () => {
    try {
      const resp = await Api.get('/etapas/1');

      setEtapas(resp.data);
    } catch (e) {
      setEtapas(null);
    }
  };

  useEffect(() => {
    isMember();
    projNav.define(params.id);
    findProject();
    findEtapas();
  }, []);

  return (
    <Styles.Container className="container p-3">
      <div>
        {projeto ? (
          <h1 className="mb-1">{projeto.nome}</h1>
        ) : (
          <h1 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h1>
        )}
      </div>

      <div className="mt-4 mb-4">
        <Link to={`/projeto/${params.id}/etapa/criar`} className="btn btn-primary">
          Criar etapa
        </Link>
      </div>

      <div className="row mt-4" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
        {etapas ? (
          etapas.map((etapa) => {
            return (
              <CardEtapa
                key={etapa.id}
                data={{
                  id: etapa.id,
                  title: etapa.nome,
                  descricao: etapa.descricao,
                }}
              />
            );
          })
        ) : projeto ? (
          <div className="container mt-4" style={{ textAlign: 'center' }}>
            <h2>Nenhuma etapa foi criada para este projeto</h2>
          </div>
        ) : (
          <div className="container mt-4" style={{ textAlign: 'center' }}>
            <h2 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h2>
          </div>
        )}
      </div>
    </Styles.Container>
  );
};
