// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
// Launch demo modal
// </button>

// <!-- Modal -->

import P from 'prop-types';
import { CardMessage } from '../CardMessage';

export const Modal = ({ options }) => {
  const { id, title, responsavel, prazo } = options;

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
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Nova mensagem
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        Digite sua mensagem:
                      </label>
                      <textarea className="form-control" id="message-text"></textarea>
                    </div>
                    <button className="btn btn-primary w-100">Enviar</button>
                  </div>
                </div>
              </div>

              <CardMessage />
              <CardMessage />
              <CardMessage />
              <CardMessage />
              <CardMessage />
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
    show: P.bool.isRequired,
  }),
};
