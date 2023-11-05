import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../services/api';
import { useAuth } from '../../context/Auth/useAuth';
import { formataData } from '../../util/date';

export const FormEtapa = () => {
  const [etapas, setEtapas] = useState(null);
  const [projeto, setProjeto] = useState(null);
  const [isLoading, setLoading] = useState(false);
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

      console.log(input);
    } catch (e) {
      console.log(e.message);
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

      <div className="container mt-4 mb-4">
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Descrição do projeto
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
                Descrição do projeto
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
                Descrição do projeto
              </label>
              <div className="input-group">
                <input
                  name="dataInicio"
                  type="date"
                  className="form-control"
                  placeholder="Insira o nome da etapa"
                  aria-label="Insira o nome da etapa"
                  aria-describedby="button-addon2"
                  value={input.dataInicio}
                  onChange={onChange}
                />
                <div style={{ margin: '0 1%' }}></div>
                <input
                  name="dataFim"
                  type="date"
                  className="form-control"
                  placeholder="Insira o nome da etapa"
                  aria-label="Insira o nome da etapa"
                  aria-describedby="button-addon2"
                  value={input.dataFim}
                  onChange={onChange}
                />
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
  );
};
