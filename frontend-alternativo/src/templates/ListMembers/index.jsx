import { useParams } from 'react-router-dom';
import { CardMember } from '../../components/CardMember';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import { useProject } from '../../context/Project/useProject';

import validator from 'validator';

export const ListMembers = () => {
  const [members, setMembers] = useState(null);
  const [perfis, setPerfis] = useState(null);
  const [newMember, setNewMember] = useState('');
  const [userFind, setUserFind] = useState(null);
  const [inputPerfilSelect, setPerfilInputSelect] = useState(null);
  const [loadingModal, setLoadingModal] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);
  const params = useParams();
  const projNav = useProject();

  const findUserProj = async () => {
    try {
      const resp = await Api.get(`/proj/${params.id}?include=members`);

      console.log(resp.data);

      setMembers(resp.data);
    } catch (e) {
      setMembers(null);
    }
  };

  const findPerfis = async () => {
    try {
      const resp = await Api.get(`/access/all`);

      setPerfis(resp.data);
    } catch (e) {
      setPerfis(null);
    }
  };

  const findUser = async () => {
    setModalOpen(true);
    setLoadingModal(true);
    try {
      const resp = await Api.get(`/user/email/${newMember}`);

      setUserFind(resp.data);
      findPerfis();
    } catch (e) {
      setUserFind(null);
    } finally {
      setLoadingModal(false);
    }
  };

  const includeMember = async () => {
    try {
      const resp = await Api.post(`/proj/member/new/${userFind.id}`, {
        idProj: projNav.idProj,
        idPerfil: inputPerfilSelect,
      });

      console.log(resp.data);
      alert('Novo membro incluido com sucesso.');
    } catch (e) {
      console.log(e.message);
    } finally {
      setPerfilInputSelect(null);
    }
  };

  useEffect(() => {
    projNav.define(params.id);
    findUserProj();
  }, []);

  useEffect(() => {
    if (!modalOpen) {
      findUserProj();
      setNewMember('');
    }
  }, [modalOpen]);

  return (
    <div className="container mt-4">
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digite o e-mail do novo membro do projeto"
            aria-label="Digite o e-mail do novo membro do projeto"
            aria-describedby="button-addon2"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            disabled={!validator.isEmail(newMember)}
            onClick={findUser}
          >
            Inserir
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Adicionar novo membro
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setUserFind(null);
                      setModalOpen(false);
                    }}
                  ></button>
                </div>
                <div className="modal-body" style={{ minHeight: '30vh' }}>
                  {loadingModal ? (
                    <div
                      style={{
                        height: '28vh',
                        textAlign: 'center',
                        padding: '8% 0',
                      }}
                    >
                      <div
                        className="spinner-grow"
                        style={{ width: '4rem', height: '4rem', margin: 'auto 3.5%' }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow"
                        style={{ width: '4rem', height: '4rem', margin: 'auto 2.5%' }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div
                        className="spinner-grow"
                        style={{ width: '4rem', height: '4rem', margin: 'auto 2.5%' }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : userFind ? (
                    <>
                      <div className="mb-3">
                        <label htmlFor="nome-usuario-input" className="form-label">
                          Usuário
                        </label>
                        <input
                          id="nome-usuario-input"
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          value={userFind.nome}
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email-usuario-input" className="form-label">
                          E-mail
                        </label>
                        <input
                          id="email-usuario-input"
                          type="text"
                          className="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                          value={userFind.email}
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="perfil-usuario-input" className="form-label">
                          Tipo de acesso
                        </label>
                        <select
                          onChange={(e) => setPerfilInputSelect(e.target.value)}
                          className="form-select"
                          id="perfil-usuario-input"
                        >
                          <option selected>Selecione...</option>
                          {perfis &&
                            perfis.map((value) => (
                              <option key={value.id} value={value.id}>
                                {value.descricao}
                              </option>
                            ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <div style={{ fontSize: '1.2rem', textAlign: 'center', padding: '10% 2%' }}>
                      E-mail não encontrado. Favor verificar se foi inserido corretamente
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  {userFind && (
                    <>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancelar
                      </button>
                      <button type="button" className="btn btn-success" onClick={includeMember}>
                        Incluir membro
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {members && (
        <div className="p-2" style={{ maxHeight: '84vh', overflowY: 'auto' }}>
          {members.map((obj) => (
            <CardMember
              key={obj.id}
              data={{
                id: obj.id,
                email: obj.user.email,
                nome: obj.user.nome,
                nivel: obj.perfil.descricao,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
