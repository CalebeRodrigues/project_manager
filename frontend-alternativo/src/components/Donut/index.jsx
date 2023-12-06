import Chart from 'react-google-charts';

import P from 'prop-types';

export const Donut = ({ data }) => {
  const options = {
    title: 'Atividades atribuídas por usuário',
    is3D: true,
  };

  return <Chart chartType="PieChart" data={data} options={options} width={'100%'} height={'30rem'} />;
};

Donut.propTypes = {
  data: P.array,
};
