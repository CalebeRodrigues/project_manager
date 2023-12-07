import P from 'prop-types';
import { Api } from '../../services/api';
import { useRef, useState } from 'react';
import { useAuth } from '../../context/Auth/useAuth';
import { useParams } from 'react-router-dom';
import { useProject } from '../../context/Project/useProject';

export const CardMember = ({ data }) => {
  const [perfis, setPerfis] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [pass, setPass] = useState('');
  const [errorPass, setErrorPass] = useState(false);

  const [isCreated, setIsCreated] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const selectControl = useRef(null);

  const auth = useAuth();
  const proj = useProject();

  const findPerfis = async () => {
    try {
      const resp = await Api.get(`/access/all`);

      setPerfis(resp.data);
      console.log(perfis);
    } catch (e) {
      setPerfis(null);
    }
  };

  const handleClick = () => {
    setLoading(false);
    setIsCreated(false);
    setErrorPass(false);
    setOpenModal(true);
    findPerfis();
  };

  const updatePerfil = async () => {
    setLoading(true);
    try {
      const idPerfil = selectControl.current.value;
      await Api.post(`/user/login`, {
        email: auth.email,
        senha: pass,
      });

      try {
        await Api.put(`/access/user/${idPerfil}`, {
          idUser: data.idUser,
          idProj: params.id,
        });

        data.nivel = selectControl.current.selectedOptions[0].textContent;
        setPass('');
        setIsCreated(true);
      } catch (e) {
        console.log(e.message);
      }
    } catch (e) {
      setErrorPass(true);
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Usuário</div>
      <div className="card-body">
        <h5 className="card-title">{data.nome}</h5>
        <p className="card-text">
          {data.email}
          {/* <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%' }}></div>
          </div> */}
        </p>
        {proj.acesso && proj.acesso.includes('ADICIONAR_MEMBRO') && (
          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#confirmaAlteracaoPerfil${data.id}`}
            onClick={handleClick}
          >
            Editar
          </a>
        )}
      </div>
      <div className="card-footer text-body-secondary text-center">{data.nivel}</div>

      <div
        className="modal fade"
        id={`confirmaAlteracaoPerfil${data.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="confirmaAlteracaoPerfilLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {data.nome}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              ></button>
            </div>
            {openModal && (
              <div className="modal-body">
                <label htmlFor="perfil-usuario-input" className="form-label">
                  Tipo de acesso
                </label>
                <select ref={selectControl} className="form-select" id="perfil-usuario-input">
                  <option>Selecione...</option>
                  {perfis &&
                    perfis.map((value) => (
                      <option key={value.id} value={value.id} selected={value.descricao == data.nivel}>
                        {value.descricao}
                      </option>
                    ))}
                </select>
                <div className="mt-4 mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Senha do usuário logado:
                  </label>
                  <input
                    type="password"
                    name="nome"
                    className={`form-control ${errorPass ? 'is-invalid' : ''}`}
                    id="exampleFormControlInput1"
                    placeholder="Insira sua senha para confirmar a atualização"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    aria-describedby="validationSenha"
                    disabled={isCreated}
                  />
                  {errorPass && (
                    <div id="validationSenha" className="invalid-feedback">
                      A senha inserida está incorreta!
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="modal-footer">
              {isCreated ? (
                <div className="alert alert-success w-100" style={{ textAlign: 'center' }} role="alert">
                  Perfil alterado com sucesso!
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-primary" onClick={updatePerfil}>
                    Alterar
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
    </div>
  );
};

CardMember.propTypes = {
  data: P.object,
};
