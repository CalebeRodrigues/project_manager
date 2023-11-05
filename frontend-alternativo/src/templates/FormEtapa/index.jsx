import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../services/api';
import { useAuth } from '../../context/Auth/useAuth';
import { formataData } from '../../util/date';

export const FormEtapa = () => {
  const [etapas, setEtapas] = useState(null);
  const [projeto, setProjeto] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [dataInvalid, setDataInvalid] = useState('');
  const [isError, setIsError] = useState({ show: false, sucess: false });
  const [input, setInput] = useState({
    nome: '',
    descricao: '',
    dataInicio: '',
    dataFim: '',
  });
  const params = useParams();
  const auth = useAuth();
  const navigate = useNavigate();

  const isMember = async () => {
    try {
      await Api.get(`/proj/member/${auth.token}?idProj=${params.id}`);
    } catch {
      navigate('/projetos');
    }
  };

  const findProject = async () => {
    try {
      const resp = await Api.get(`/proj/${params.id}`);

      setProjeto(resp.data);
    } catch (e) {
      setProjeto(null);
    }
  };

  const findEtapasByProject = async () => {
    try {
      const resp = await Api.get(`/etapas/${params.id}`);
      setEtapas(resp.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const createEtapa = async () => {
    setIsError({
      show: false,
      sucess: false,
    });
    if (!(new Date(input.dataInicio) < new Date(input.dataFim))) {
      setDataInvalid('is-invalid');
      return;
    }

    setLoading(true);
    if (input.nome.length < 3) alert('Favor inserir um nome maior para etapa');
    try {
      const resp = await Api.post(`/etapa/create`, {
        ...input,
        dataInicio: formataData(input.dataInicio),
        dataFim: formataData(input.dataFim),
        dataInicioReal: '',
        dataEntrega: '',
        idProj: params.id,
      });
      console.log(resp.data);
      setIsError({
        show: true,
        sucess: true,
      });
      console.log(input);
    } catch (e) {
      console.log(e.message);
      setIsError({
        show: true,
        sucess: false,
      });
    } finally {
      setInput({
        nome: '',
        descricao: '',
        dataInicio: '',
        dataFim: '',
      });
      await findEtapasByProject();
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

  useEffect(() => {
    isMember();
    findProject();
    findEtapasByProject();
  }, []);

  const handleClickCloseMsg = () => {
    setIsError({
      show: false,
      sucess: false,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    createEtapa();
  };

  return (
    <div>
      {projeto ? (
        <h1 className="mb-1">{projeto.nome}</h1>
      ) : (
        <h1 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h1>
      )}

      {projeto ? (
        <div>
          <div className="container mt-4 mb-4">
            <div>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Nome da etapa
                  </label>
                  <input
                    name="nome"
                    type="text"
                    className="form-control"
                    placeholder="Insira o nome da etapa"
                    aria-label="Insira o nome da etapa"
                    aria-describedby="button-addon2"
                    value={input.nome}
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Descrição da etapa
                  </label>
                  <textarea
                    name="descricao"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    defaultValue={input.descricao}
                    value={input.descricao}
                    onChange={onChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Data de inicio e fim da etapa
                  </label>
                  <div className="input-group">
                    <input
                      name="dataInicio"
                      type="date"
                      className={`form-control ${dataInvalid}`}
                      placeholder="Insira o nome da etapa"
                      aria-label="Insira o nome da etapa"
                      aria-describedby="button-addon2"
                      value={input.dataInicio}
                      onChange={(e) => {
                        setDataInvalid('');
                        onChange(e);
                      }}
                    />
                    <div style={{ margin: '0 1%' }}></div>
                    <input
                      name="dataFim"
                      type="date"
                      className={`form-control ${dataInvalid}`}
                      placeholder="Insira o nome da etapa"
                      aria-label="Insira o nome da etapa"
                      aria-describedby="button-addon2"
                      value={input.dataFim}
                      onChange={(e) => {
                        setDataInvalid('');
                        onChange(e);
                      }}
                    />
                    <div id="validationServer03Feedback" className="invalid-feedback">
                      A data final deve ser superior a data de inicio
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit" id="button-addon2" onClick={handleClick}>
                  Criar Etapa{' '}
                  {isLoading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      style={{ marginLeft: '3px' }}
                      aria-hidden="true"
                    ></span>
                  )}
                </button>
              </form>
              <div>
                {isError.show ? (
                  isError.sucess ? (
                    <div className="mt-4 alert alert-success alert-dismissible fade show" role="alert">
                      <strong>Etapa criada com sucesso!</strong>
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
                      <strong>Ocorreu um erro ao criar a etapa, tente novamente mais tarde.</strong>
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
            </div>
          </div>

          <div className="mt-4">
            {etapas &&
              etapas.map((v) => (
                <div key={v.id} className="mb-2">
                  <h5>{v.nome}</h5>
                  <p>{v.descricao}</p>
                  <p>{v.dataInicio}</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center" style={{ height: '40vh', width: '100%' }}>
          <div className="spinner-grow" role="status" style={{ margin: 'auto 2%' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow" role="status" style={{ margin: 'auto 2%' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow" role="status" style={{ margin: 'auto 2%' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
