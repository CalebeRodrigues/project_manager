import P from 'prop-types';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import { useProject } from '../../context/Project/useProject';

export const CreateActivity = ({ data }) => {
  const { idEtapa, isShow, setShow } = data;

  const [members, setMembers] = useState(null);

  const proj = useProject();

  const [input, setInput] = useState({
    titulo: '',
    descricao: '',
    prazo: '',
    idEtapa: '' + idEtapa,
    kanban: 'do',
    idUser: '1',
  });

  const onChange = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: '' + value,
    });
  };

  const findMembers = async () => {
    try {
      const resp = await Api.get(`/proj/members/${proj.idProj}`);

      setMembers(resp.data);
      console.log(members);
    } catch (e) {
      console.log(e.message);
    }
  };

  const createAtividade = async () => {
    try {
      const resp = await Api.post(`/atividade/create`, input);

      console.table(input);

      console.log(resp.data);
      alert('Deu certooooooo');
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (isShow) findMembers();
  }, [isShow]);

  const handleClick = () => {
    createAtividade();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#criarAtividadeModal"
        onClick={() => setShow(true)}
      >
        Criar atividade {idEtapa}
      </button>

      <div
        className="modal fade"
        id="criarAtividadeModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Adicionar nova tarefa
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
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Titulo:
                </label>
                <input
                  type="text"
                  value={input.titulo}
                  name="titulo"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Insira seu titulo"
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="textAreaDescricao" className="form-label">
                  Descrição:
                </label>
                <textarea
                  className="form-control"
                  id="textAreaDescricao"
                  defaultValue={input.descricao}
                  name="descricao"
                  onChange={onChange}
                  value={input.descricao}
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Prazo de entrega
                </label>
                <input
                  type="date"
                  name="prazo"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Insira o prazo de entrega"
                  value={input.prazo}
                  onChange={onChange}
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                  Responsável:
                </label>
                <select className="form-select" id="inputGroupSelect01" name="idUser" onChange={onChange}>
                  <option selected>Selecione...</option>
                  {members &&
                    members.map((obj) => (
                      <option key={obj.user.id} value={obj.user.id}>
                        {obj.user.nome} - {obj.user.email}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setShow(false)}
              >
                Fechar
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Criar atividade
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CreateActivity.propTypes = {
  data: P.shape({
    idEtapa: P.number,
    isShow: P.bool,
    setShow: P.func,
  }),
};
