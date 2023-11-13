import { CollapseNewMsg } from '../CollapseNewMsg';
import { DivMessage } from '../DivMessage';

import P from 'prop-types';

export const ModalComentarios = ({ id, aprovacao = false }) => {
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
              Modal title
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <CollapseNewMsg />
            <div className="mt-4"></div>
            <div className="p-2" style={{ height: '48vh', overflowY: 'auto' }}>
              <DivMessage />
            </div>
          </div>
          <div className="modal-footer">
            {aprovacao && (
              <>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                  Rejeitar
                </button>
                <button type="button" className="btn btn-success">
                  Aprovar entrega
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ModalComentarios.propTypes = {
  id: P.number,
  aprovacao: P.bool,
};
