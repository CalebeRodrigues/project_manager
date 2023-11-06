import P from 'prop-types';

export const CardMember = ({ data }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">{data.email}</div>
      <div className="card-body">
        <h5 className="card-title">{data.nome}</h5>
        <p className="card-text">
          Atividades atribuidas: 20/50
          {/* <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%' }}></div>
          </div> */}
        </p>
        <a href="#" className="btn btn-primary">
          Editar
        </a>
      </div>
      <div className="card-footer text-body-secondary text-center">{data.nivel}</div>
    </div>
  );
};

CardMember.propTypes = {
  data: P.object,
};
