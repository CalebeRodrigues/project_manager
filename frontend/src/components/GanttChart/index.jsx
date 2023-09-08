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
  ['1', 'Calebe', 'Calebe', new Date(2023, 11, 27), new Date(2023, 11, 28), null, 100, null],
  ['2', 'Gusta', 'Gusta', new Date(2023, 11, 29), new Date(2023, 11, 31), null, 100, '1'],
  ['3', 'Jorge', 'Jorge', new Date(2023, 12, 1), new Date(2023, 12, 4), null, 100, '1'],
  ['4', 'Lucas', 'Lucas', new Date(2023, 12, 2), new Date(2023, 12, 3), null, 100, null],
  ['5', 'Gusta', 'Lucas', new Date(2023, 12, 3), new Date(2023, 12, 4), null, 100, '2'],
  ['6', 'Calebe', 'Calebe', new Date(2023, 12, 4), new Date(2023, 12, 7), null, 100, '2'],
  ['7', 'Lucas', 'Lucas', new Date(2023, 12, 5), new Date(2023, 12, 8), null, 100, '1'],
  ['8', 'Jorge', 'Jorge', new Date(2023, 12, 6), new Date(2023, 12, 10), null, 100, '5'],
  ['9', 'Lucas', 'Lucas', new Date(2023, 12, 7), new Date(2023, 12, 8), null, 100, null],
  ['10', 'Gusta', 'Gusta', new Date(2023, 12, 2), new Date(2023, 12, 9), null, 100, null],
  ['11', 'Calebe', 'Calebe', new Date(2023, 12, 4), new Date(2023, 12, 10), null, 100, null],
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
    <div>
      <Chart chartType="Gantt" width="100%" height="50%" data={data} options={options} />
    </div>
  );
};
