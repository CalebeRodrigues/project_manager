import P from 'prop-types';

import { Link } from 'react-router-dom';

export const CardProject = ({ option }) => {
  return (
    <div key={option.id} className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{option.title}</h5>
          <p className="card-text">{option.description}</p>
          <Link to={`/proj/${option.id}`} className="btn btn-primary">
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  option: P.shape({
    id: P.number,
    title: P.string,
    description: P.string,
  }),
};
