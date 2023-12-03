import { useEffect, useState } from 'react';
import { Api } from '../../services/api';

import P from 'prop-types';

export const PerfilModal = ({ reload }) => {
  const [access, setAccess] = useState(null);
  const [input, setInput] = useState([]);

  const reloadModal = reload[0];
  const setReload = reload[1];

  const [isCreated, setIsCreated] = useState(false);

  const [loading, setLoading] = useState(false);

  const [descricao, setDescricao] = useState('');

  const findCodeAccess = async () => {
    setAccess(null);
    setReload(false);
    try {
      const resp = await Api.get(`/access/allAccess`);

      setAccess(resp.data);
      console.log(resp.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const clearValues = () => {
    setIsCreated(false);
    setInput([]);
    setDescricao('');
    setLoading(false);
  };

  const handleClickInput = (obj) => {
    const { value, checked } = obj;
    const aux = input;

    if (checked) {
      aux.push(value);

      return;
    }

    const index = input.indexOf(value);

    if (!(index > -1)) return;

    aux.splice(index, 1);

    setInput(aux);
  };

  const createPerfil = async () => {
    setLoading(true);
    try {
      await Api.post(`/access/create`, {
        descricao,
        access: input,
      });

      setIsCreated(true);
    } catch (e) {
      console.log(e.message);
    } finally {
      // setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  useEffect(() => {
    findCodeAccess();
  }, []);

  useEffect(() => {
    if (reloadModal) {
      findCodeAccess();
    }
  }, [reloadModal]);

  return (
    <div
      className="modal fade"
      id="perfilModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Perfil de Acesso
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={clearValues}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Insira o nome do seu perfil"
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
              />
            </div>
            <div className="mb-3">
              <p>Autorizações:</p>
              <div className="p-2" style={{ maxHeight: '12rem', overflowY: 'auto' }}>
                {access &&
                  access.map((obj) => (
                    <div key={obj.id} className="form-check form-switch mb-3">
                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                        {obj.descricao}
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        value={obj.code}
                        onChange={(e) => handleClickInput(e.target)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {isCreated ? (
              <div className="alert alert-success w-100" style={{ textAlign: 'center' }} role="alert">
                Perfil criado com sucesso!
              </div>
            ) : (
              <>
                {' '}
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={clearValues}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-success" onClick={createPerfil}>
                  Criar Perfil
                  {loading && (
                    <div className="spinner-border spinner-border-sm" style={{ marginLeft: '0.2rem' }} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PerfilModal.propTypes = {
  reload: P.array,
};
