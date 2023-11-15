import { useNavigate, useParams } from 'react-router-dom';
import { CardActivity } from '../../components/CardActivity';
import * as Styles from './style';
import { useEffect, useState } from 'react';
import { useProject } from '../../context/Project/useProject';
import { Api } from '../../services/api';
import { useAuth } from '../../context/Auth/useAuth';
import { CreateActivity } from '../../components/CreateActivity';

export const Etapa = () => {
  const auth = useAuth();
  const params = useParams();
  const projNav = useProject();
  const navigate = useNavigate();

  const [etapa, setEtapa] = useState(null);
  const [isShowModalCreate, setShowModalCreate] = useState(false);

  const [reloadAtividades, setReloadAtividades] = useState(false);

  const [atividade, setAtividade] = useState({
    do: null,
    doing: null,
    does: null,
  });

  const isMember = async () => {
    try {
      await Api.get(`/proj/member/${auth.token}?idProj=${params.id}`);
    } catch {
      navigate('/projetos');
    }
  };

  const findEtapa = async () => {
    try {
      const resp = await Api.get(`/etapa/${params.idEtapa}`);

      console.log(resp.data);
      setEtapa(resp.data);
    } catch {
      setEtapa(null);
    }
  };

  const organizaKanban = (obj) => {
    const doArray = [];
    const doingArray = [];
    const doesArray = [];

    for (let v of obj) {
      if (v.kanban === 'do') doArray.push(v);
      else if (v.kanban === 'doing') doingArray.push(v);
      else if (v.kanban === 'doing2') doingArray.push(v);
      else if (v.kanban === 'does') doesArray.push(v);
    }

    return {
      do: doArray.length > 0 ? doArray : null,
      doing: doingArray.length > 0 ? doingArray : null,
      does: doesArray.length > 0 ? doesArray : null,
    };
  };

  const findAtividades = async () => {
    try {
      const resp = await Api.get(`/atividades/${params.idEtapa}`);

      console.log(organizaKanban(resp.data));

      setAtividade(organizaKanban(resp.data));
    } catch {
      setAtividade({ do: null, doing: null, does: null });
    } finally {
      console.log(atividade);
    }
  };

  useEffect(() => {
    isMember();
    projNav.define(params.id);

    findEtapa();
    findAtividades();
  }, []);

  useEffect(() => {
    if (reloadAtividades) {
      findAtividades();
      setReloadAtividades(false);
    }
  }, [reloadAtividades]);

  return (
    <div className="mt-4 container">
      {etapa && (
        <>
          <h1>Etapa: {etapa.nome}</h1>
          <CreateActivity
            data={{
              idEtapa: etapa.id,
              isShow: isShowModalCreate,
              setShow: setShowModalCreate,
            }}
          />
          <Styles.KanbanContainer>
            <Styles.KanBanItem>
              <h3 className="mb-3" style={{ textAlign: 'center' }}>
                Por fazer
              </h3>

              {atividade.do ? (
                atividade.do.map((obj) => (
                  <CardActivity
                    key={obj.id}
                    data={{
                      id: obj.id,
                      titulo: obj.titulo,
                      descricao: obj.descricao,
                      kanban: obj.kanban,
                      prazo: obj.prazo,
                      responsavel: obj.user.nome,
                      setReloadAtividade: setReloadAtividades,
                    }}
                  />
                ))
              ) : (
                <div className="mt-4" style={{ textAlign: 'center' }}>
                  <h5>Não existe nenhuma tarefa na lista por fazer</h5>
                </div>
              )}
            </Styles.KanBanItem>
            <Styles.KanBanItem>
              <h3 className="mb-3" style={{ textAlign: 'center' }}>
                Fazendo
              </h3>
              {atividade.doing ? (
                atividade.doing.map((obj) => (
                  <CardActivity
                    key={obj.id}
                    data={{
                      id: obj.id,
                      titulo: obj.titulo,
                      descricao: obj.descricao,
                      kanban: obj.kanban,
                      prazo: obj.prazo,
                      responsavel: obj.user.nome,
                      setReloadAtividade: setReloadAtividades,
                    }}
                  />
                ))
              ) : (
                <div className="mt-4" style={{ textAlign: 'center' }}>
                  <h5>Não existe nenhuma tarefa na lista fazendo</h5>
                </div>
              )}
            </Styles.KanBanItem>
            <Styles.KanBanItem>
              <h3 className="mb-3" style={{ textAlign: 'center' }}>
                Finalizado
              </h3>
              {atividade.does ? (
                atividade.does.map((obj) => (
                  <CardActivity
                    key={obj.id}
                    data={{
                      id: obj.id,
                      titulo: obj.titulo,
                      descricao: obj.descricao,
                      kanban: obj.kanban,
                      prazo: obj.prazo,
                      responsavel: obj.user.nome,
                      setReloadAtividade: setReloadAtividades,
                    }}
                  />
                ))
              ) : (
                <div className="mt-4" style={{ textAlign: 'center' }}>
                  <h5>Não existe nenhuma tarefa na lista de concluidas</h5>
                </div>
              )}
            </Styles.KanBanItem>
          </Styles.KanbanContainer>
        </>
      )}
    </div>
  );
};
