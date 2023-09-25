import P from 'prop-types';

import { Link } from 'react-router-dom';

import { Chart } from 'react-google-charts';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const CardProject = ({ option }) => {
  const data = [
    ['Status', 'Atividades'],
    ['Concluido', getRandom(20, 100)],
    ['Pendente', getRandom(1, 100)],
  ];

  const options = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle: 100,
    colors: ['#0d6efd', '#f36060'],
  };

  return (
    <div key={option.id} className="card col-md-2 m-2 justify-center" style={{ width: '18rem' }}>
      <Chart class="card-img-top" chartType="PieChart" data={data} options={options} width={'100%'} />
      <div className="card-body">
        <h5 className="card-title">{option.nome}</h5>
        <p className="card-text">{option.descricao}</p>
        <Link to={`/proj/${option.id}`} className="btn btn-primary">
          Detalhes
        </Link>
      </div>
    </div>
  );
};

/*
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
*/

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
    nome: P.string,
    descricao: P.string,
  }),
};
