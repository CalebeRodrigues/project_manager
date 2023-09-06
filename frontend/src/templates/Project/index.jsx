import { useParams } from 'react-router-dom';
import { GanttChart } from '../../components/GanttChart';
import { CardActivity } from '../../components/CardActivity';

export const Project = () => {
  const params = useParams();
  const ids = [];
  for (let i = 0; i < 10; i++) {
    ids.push(i);
  }

  return (
    <div className="container" style={{ marginTop: '70px' }}>
      <h3>Projeto page {params.id}</h3>
      <br />
      <br />
      <GanttChart />
      <h3>Atividades</h3>
      <div className="row">
        {ids.map((v) => (
          <div key={v} className="col-md-3">
            <CardActivity
              values={{
                id: v,
                title: 'Teste',
                prazo: '27/11/2023',
                responsavel: 'Calebe Rodrigues',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
