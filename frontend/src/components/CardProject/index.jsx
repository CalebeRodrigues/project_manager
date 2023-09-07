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

export const CardsProjectLoading = () => {
  const ids = [1, 2, 3, 4, 5];
  return (
    <>
      {ids.map((n) => (
        <div key={n} className="col-md-4 mb-4 placeholder-glow">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title placeholder w-100" style={{ minHeight: '2%' }}>
                -
              </h5>
              <p className="card-text placeholder w-100">-</p>
              <p className="card-text placeholder w-100">-</p>
              {/* <button className="btn btn-primary placeholder w-100">-</button> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

CardProject.propTypes = {
  option: P.shape({
    id: P.number,
    title: P.string,
    description: P.string,
  }),
};
