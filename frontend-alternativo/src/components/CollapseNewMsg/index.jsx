import { useState } from 'react';

import P from 'prop-types';
import { Api } from '../../services/api';
import { useAuth } from '../../context/Auth/useAuth';

export const CollapseNewMsg = ({ idAtividade, after = null }) => {
  const [newMsg, setNewMsg] = useState();
  const auth = useAuth();

  const createMsg = async () => {
    try {
      const resp = await Api.post(`/comentario/create`, {
        conteudo: newMsg,
        idAtividade: '' + idAtividade,
        idUser: '' + auth.token,
      });

      console.log(resp.data);
      setNewMsg('');

      if (after) after();
    } catch {
      setNewMsg('');
    }
  };

  const handleClickNewMsg = () => {
    createMsg();
  };

  return (
    <>
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-new-mensage1`}
          aria-expanded="false"
          aria-controls={`#collapse-new-mensage1`}
        >
          Nova mensagem
        </button>
      </p>
      <div className="collapse" id={`collapse-new-mensage1`}>
        <div className="card card-body">
          <div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Digite sua mensagem:
              </label>
              <textarea
                className="form-control"
                id="message-text"
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn btn-primary w-100"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-new-mensage1`}
              aria-expanded="false"
              aria-controls={`#collapse-new-mensage1`}
              onClick={handleClickNewMsg}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CollapseNewMsg.propTypes = {
  after: P.func,
  idAtividade: P.number,
};
