import { Link } from 'react-router-dom';
import * as Styles from './style';

import P from 'prop-types';

export const CardProject = ({ data }) => {
  const { id, nome, descricao, status } = data;

  return (
    <Styles.Container className="card">
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{status}</h6>
        <p className="card-text">{descricao}</p>
        <Link to={`/projeto/${id}`} className="card-link">
          Acessar
        </Link>
      </div>
    </Styles.Container>
  );
};

CardProject.propTypes = {
  data: P.shape({
    id: P.number.isRequired,
    nome: P.string.isRequired,
    descricao: P.string.isRequired,
    status: P.string.isRequired,
  }).isRequired,
};
