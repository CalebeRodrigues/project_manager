import Chart from 'react-google-charts';

import P from 'prop-types';

export const BarChart = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const temp = [
    ['Etapa', 'Sales', 'Expenses', 'Profit'],
    ['Projeto', 1000, 400, 200],
  ];

  const options = {
    chart: {
      title: 'Atividades por etapa',
      subtitle: 'Quantidade de atividades criadas por etapa',
    },
  };

  return <Chart chartType="Bar" data={data} options={options} width={'100%'} height={'30rem'} />;
};

BarChart.propTypes = {
  data: P.array,
};
