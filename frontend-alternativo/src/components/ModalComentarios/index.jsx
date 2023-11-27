import { useEffect, useState } from 'react';
import { CollapseNewMsg } from '../CollapseNewMsg';
import { DivMessage } from '../DivMessage';

import P from 'prop-types';
import { Api } from '../../services/api';
import { useAuth } from '../../context/Auth/useAuth';
import { useProject } from '../../context/Project/useProject';

export const ModalComentarios = ({ id, title, idResp, kanban, aprovacao = false, show, setShow }) => {
  const [comentarios, setComentarios] = useState(null);
  const [kanbanName, setKanbanName] = useState(kanban);

  const auth = useAuth();
  const project = useProject();

  const findComentarios = async () => {
    try {
      const resp = await Api.get(`/comentarios/${id}`);

      setComentarios(resp.data);
    } catch (e) {
      setComentarios(null);
    }
  };

  const updateKanbanAtividade = async (kanban) => {
    try {
      await Api.put(`/atividade/update/${id}`, {
        kanban,
      });
      setKanbanName(kanban);
    } catch (e) {
      console.log(e.message);
    }
  };

  const validaAtividade = async (resposta) => {
    try {
      await Api.put(`/atividade/update/${id}`, {
        kanban: resposta ? 'does' : 'doing',
      });

      setKanbanName(resposta ? 'does' : 'doing');
    } catch (e) {
      console.log(e.message);
    } finally {
      setShow(false);
    }
  };

  useEffect(() => {
    findComentarios();
  }, []);

  useEffect(() => {
    if (show) findComentarios();
  }, [show]);

  return (
    <div
      className="modal fade"
      id={`comentarios-modal-${id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      style={{ overflowY: 'hidden' }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            {auth.token == idResp ? (
              <CollapseNewMsg idAtividade={id} key={id} after={findComentarios} />
            ) : (
              project.acesso &&
              project.acesso.includes('RESPONDER_COMENTARIO') && (
                <CollapseNewMsg idAtividade={id} key={id} after={findComentarios} />
              )
            )}
            <div className="mt-4"></div>
            <div className="p-2" style={{ height: '51vh', overflowY: 'auto' }}>
              {comentarios &&
                comentarios.map((obj) => (
                  <DivMessage
                    key={obj.id}
                    options={{
                      autor: obj.user.nome,
                      conteudo: obj.conteudo,
                      data: obj.createdAt,
                      idAutor: obj.idUser,
                    }}
                  />
                ))}
            </div>
          </div>
          <div className="modal-footer">
            {aprovacao && (
              <>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => validaAtividade(false)}
                >
                  Rejeitar
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => validaAtividade(true)}
                >
                  Aprovar entrega
                </button>
              </>
            )}
            <div className="btn-group dropup">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status:{' '}
                {kanbanName == 'do'
                  ? 'Por fazer'
                  : kanbanName == 'doing'
                  ? 'Fazendo'
                  : kanbanName == 'doing2'
                  ? 'Validação'
                  : 'Concluido'}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={() => updateKanbanAtividade('do')}>
                    Por fazer
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => updateKanbanAtividade('doing')}>
                    Fazendo
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => updateKanbanAtividade('doing2')}>
                    Validação
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalComentarios.propTypes = {
  id: P.number,
  title: P.string,
  kanban: P.string,
  idResp: P.number,
  aprovacao: P.bool,
  show: P.bool,
  setShow: P.func,
};
