import Chart from 'react-google-charts';

import P from 'prop-types';

export const PieChart = ({ data, title }) => {
  const datavalues = [['Status', 'Quantidade'], ...data];

  const options = {
    title: `Etapa: ${title}`,
    pieHole: 0.4,
  };

  return <Chart chartType="PieChart" data={datavalues} options={options} width={'100%'} height={'30rem'} />;
};

PieChart.propTypes = {
  data: P.array,
  title: P.title,
};
