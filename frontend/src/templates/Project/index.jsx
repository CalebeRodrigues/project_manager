import { useParams } from 'react-router-dom';
import { GanttChart } from '../../components/GanttChart';

export const Project = () => {
  const params = useParams();

  return (
    <div className="container" style={{ marginTop: '70px' }}>
      <h3>Projeto page {params.id}</h3>
      <br />
      <br />
      <GanttChart />
      <h3>Atividades</h3>
    </div>
  );
};
