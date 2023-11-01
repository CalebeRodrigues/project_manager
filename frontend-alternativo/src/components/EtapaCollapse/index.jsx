import { CardActivity } from '../CardActivity';

import P from 'prop-types';

export const EtapaCollapse = ({ options }) => {
  const { id, nome } = options;

  return (
    <div>
      <h2
        className="mb-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapseExample${id}`}
        aria-expanded="false"
        aria-controls={`collapseExample${id}`}
      >
        Etapa {id} - {nome}
      </h2>
      <div className="collapse" id={`collapseExample${id}`}>
        <div className="card card-body">
          <div className="row" style={{ maxHeight: '70vh' }}>
            <div className="col-lg-4">
              <h3>Por fazer</h3>
            </div>
            <div className="col-lg-4">
              <h3>Em andamento</h3>
            </div>
            <div className="col-lg-4">
              <h3>Feito</h3>
            </div>
            <div className="row" style={{ height: '62vh', overflowY: 'scroll' }}>
              <div className="col-lg-4">
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
              </div>
              <div className="col-lg-4">
                <CardActivity />
                <CardActivity />
                <CardActivity />
              </div>
              <div className="col-lg-4">
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
                <CardActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EtapaCollapse.propTypes = {
  options: P.shape({
    id: P.number.isRequired,
    nome: P.string.isRequired,
  }).isRequired,
};
