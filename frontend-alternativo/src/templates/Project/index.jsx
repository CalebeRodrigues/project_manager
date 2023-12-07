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

  const [encerravel, setEncerravel] = useState(false);

  const [reloadEtapas, setReloadEtapas] = useState(false);

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
    setReloadEtapas(false);
    try {
      const resp = await Api.get(`/etapas/${params.id}`);

      setEtapas(resp.data);

      const result = isFinalizavel(resp.data);

      setEncerravel(result);
    } catch (e) {
      setEtapas(null);
    }
  };

  const isFinalizavel = (etapa) => {
    if (!etapa) return false;

    const total = etapa.length;

    let finalizadas = 0;

    for (let value of etapa) {
      if (value.dataEntrega.length > 0) finalizadas++;
      console.log(value);
    }
    console.log('Total', total, 'Finalizados', finalizadas);

    return total == finalizadas;
  };

  const finalizarProjeto = async () => {
    try {
      await Api.put(`/proj/update/${projNav.idProj}`, {
        status: 'Concluído',
      });

      await findProject();
      await findEtapas();
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    isMember();
    projNav.define(params.id);
    findProject();
    findEtapas();
  }, []);

  useEffect(() => {
    if (reloadEtapas) findEtapas();
  }, [reloadEtapas]);

  return (
    <Styles.Container className="container p-3">
      <div>
        {projeto ? (
          <h1 className="mb-2">{projeto.nome}</h1>
        ) : (
          <h1 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h1>
        )}
      </div>

      <div>
        {projNav.acesso && projNav.acesso.includes('CRIAR_ETAPA') && projeto && projeto.status != 'Concluído' && (
          <span className="mt-4 mb-4" style={{ marginRight: '1%' }}>
            <Link to={`/projeto/${params.id}/etapa/criar`} className="btn btn-primary">
              Criar etapa
            </Link>
          </span>
        )}

        {projeto &&
          projeto.status != 'Concluído' &&
          encerravel &&
          projNav.acesso &&
          projNav.acesso.includes('FINALIZAR_PROJETO') && (
            <>
              <span className="mt-4 mb-4">
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#finalizarProjetoModal">
                  Finalizar projeto
                </button>
              </span>

              {/* Modal */}
              <div
                className="modal fade"
                id="finalizarProjetoModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Projeto</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Deseja prosseguir com o encerramento deste projeto?</p>
                    </div>
                    <div className="modal-footer" data-bs-dismiss="modal">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Não
                      </button>
                      <button type="button" className="btn btn-primary" onClick={finalizarProjeto}>
                        Sim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
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
                  dataInicio: etapa.dataInicio,
                  dataFim: etapa.dataFim,
                  dataInicioReal: etapa.dataInicioReal,
                  dataEntrega: etapa.dataEntrega,
                  reload: setReloadEtapas,
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
