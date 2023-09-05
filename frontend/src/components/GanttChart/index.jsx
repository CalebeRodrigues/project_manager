import React from 'react';
import { Chart } from 'react-google-charts';

const columns = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'string', label: 'Resource' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
];

const rows = [
  ['1', 'Calebe ', 'Calebe', new Date(2023, 11, 27), new Date(2023, 11, 28), null, 100, null],
  ['2', 'Gusta ', 'Gusta2', new Date(2023, 11, 29), new Date(2023, 11, 30), null, 100, '1'],
  ['3', 'Jorge ', 'Jorge2', new Date(2023, 12, 1), new Date(2023, 12, 2), null, 100, '1'],
  ['4', 'Lucas ', 'Lucas2', new Date(2023, 12, 2), new Date(2023, 12, 3), null, 100, null],
];

const data = [columns, ...rows];

const options = {
  height: 400,
  gantt: {
    trackHeight: 30,
    criticalPathEnabled: false,
  },
};

export const GanttChart = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <Chart chartType="Gantt" width="100%" height="50%" data={data} options={options} />
    </div>
  );
};
