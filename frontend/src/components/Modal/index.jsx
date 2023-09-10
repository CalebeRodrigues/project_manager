// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
// Launch demo modal
// </button>

// <!-- Modal -->

import P from 'prop-types';
import { CardMessage } from '../CardMessage';
import { useState } from 'react';

export const Modal = ({ options }) => {
  const { id, title, responsavel, prazo } = options;

  const [newMsg, setNewMsg] = useState('');
  const [cardMsgData, setMsgCard] = useState([
    {
      id: 0,
      autor: 'Pessoa',
      conteudo: 'Mensagem de texto que a pessoa pode deixar anexada na atividade que lhe foi atribuida.',
    },
  ]);

  const handleClickNewMsg = () => {
    console.log('Handle click');
    const array = [
      {
        id: cardMsgData.length,
        autor: 'Pessoa',
        conteudo: newMsg,
      },
      ...cardMsgData,
    ];
    setMsgCard(array);
    setNewMsg('');
  };

  return (
    <div id={`modal-${id}`} className="modal fade" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 aria-label="modal-title fs-5 breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  {responsavel}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title} ({prazo})
                </li>
              </ol>
            </h4>
            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
              Atividade de {responsavel} - {title} (Prazo {prazo})
            </h1> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="p-2">
              <p className="d-inline-flex gap-1">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-new-mensage${id}`}
                  aria-expanded="false"
                  aria-controls={`#collapse-new-mensage${id}`}
                >
                  Nova mensagem
                </button>
              </p>
              <div className="collapse" id={`collapse-new-mensage${id}`}>
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
                      data-bs-target={`#collapse-new-mensage${id}`}
                      aria-expanded="false"
                      aria-controls={`#collapse-new-mensage${id}`}
                      onClick={handleClickNewMsg}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>

              {cardMsgData && cardMsgData.length > 0 ? (
                cardMsgData.map((v) => <CardMessage key={v.id} dados={v} />)
              ) : (
                <CardMessage
                  dados={{
                    autor: '-',
                    conteudo: 'Ainda não foi enviado nenhum comentário',
                    dataEnvio: '-',
                  }}
                />
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  options: P.shape({
    id: P.number.isRequired,
    title: P.string.isRequired,
    responsavel: P.string,
    prazo: P.string.isRequired,
  }),
};
