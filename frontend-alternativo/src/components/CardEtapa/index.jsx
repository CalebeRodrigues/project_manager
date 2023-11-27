import { Link } from 'react-router-dom';
import { useProject } from '../../context/Project/useProject';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import P from 'prop-types';

export const CardEtapa = ({ data }) => {
  const [count, setCount] = useState({ andamento: 0, total: 0 });
  const { id, title, descricao } = data;
  const project = useProject();

  const countEtapaAtividades = async () => {
    try {
      const resp = await Api.get(`/atividade/count/${id}`);

      setCount(resp.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    countEtapaAtividades();
  }, []);

  return (
    <div className="card mb-4" style={{ width: '98%' }}>
      <h4 className="card-header">Etapa #{id}</h4>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descricao}</p>
        <Link to={`/projeto/${project.idProj}/etapa/${id}`} className="btn btn-primary" style={{ marginRight: '1%' }}>
          Visualizar atividades {`${count.total - count.andamento}/${count.total}`}
        </Link>
        {project.acesso && project.acesso.includes('LIBERAR_ETAPA') && (
          <button className="btn btn-success" style={{ marginRight: '1%' }}>
            Liberar etapa
          </button>
        )}
        {project.acesso && project.acesso.includes('FINALIZAR_ETAPA') && (
          <button className="btn btn-danger">Finalizar etapa</button>
        )}
      </div>
    </div>
  );
};

CardEtapa.propTypes = {
  data: P.shape({
    id: P.number,
    title: P.string,
    descricao: P.string,
  }),
};
