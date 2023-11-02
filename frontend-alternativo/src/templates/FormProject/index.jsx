import { useState } from 'react';
import * as Styles from './styles';
import { useAuth } from '../../context/Auth/useAuth';
import { Api } from '../../services/api';

export const FormProject = () => {
  const auth = useAuth();
  const [input, setInput] = useState({
    nome: '',
    descricao: '',
    status: 'Em andamento',
    idCriador: '' + auth.token,
  });
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState('ignore');

  const createProject = async () => {
    setLoading(true);
    try {
      const response = await Api.post('/proj/create', input);
      console.table(response.data);
      setError(false);
    } catch (e) {
      console.log(e.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    createProject();
    console.log(input);
  };

  const handleClickCloseMsg = () => {
    setError('ignore');
  };

  return (
    <Styles.Container className="container">
      <div>
        <h1>Novo Projeto</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="nomeProjectForm" className="form-label">
              Nome do projeto
            </label>
            <input
              type="text"
              name="nome"
              className="form-control"
              id="nomeProjectForm"
              placeholder="Digite o nome do seu projeto"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Descrição do projeto
            </label>
            <textarea
              name="descricao"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={onChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Criar projeto
            {isLoading && (
              <span
                className="spinner-border spinner-border-sm"
                style={{ marginLeft: '3px' }}
                aria-hidden="true"
              ></span>
            )}
          </button>
        </form>
      </div>

      <div>
        {isError != 'ignore' ? (
          !isError ? (
            <div className="mt-4 alert alert-success alert-dismissible fade show" role="alert">
              <strong>Projeto criado com sucesso!</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleClickCloseMsg}
              ></button>
            </div>
          ) : (
            <div className="mt-4 alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Ocorreu um erro ao criar seu projeto, tente novamente mais tarde.</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleClickCloseMsg}
              ></button>
            </div>
          )
        ) : (
          <span></span>
        )}
      </div>
      <br />
    </Styles.Container>
  );
};
