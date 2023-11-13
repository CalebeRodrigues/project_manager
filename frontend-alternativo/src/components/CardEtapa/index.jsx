import P from 'prop-types';
import { Link } from 'react-router-dom';
import { useProject } from '../../context/Project/useProject';

export const CardEtapa = ({ data }) => {
  const { id, title, descricao } = data;
  const project = useProject();

  return (
    <div className="card mb-4" style={{ width: '98%' }}>
      <h4 className="card-header">Etapa #{id}</h4>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descricao}</p>
        <Link to={`/projeto/${project.idProj}/etapa/${id}`} className="btn btn-primary">
          Visualizar atividades
        </Link>
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
