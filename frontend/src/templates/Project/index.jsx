import { useParams } from 'react-router-dom';
import { GanttChart } from '../../components/GanttChart';
import { CardActivity } from '../../components/CardActivity';
import { KanbanActivity } from '../../components/KanbanActivity';
import { CollapseList } from '../../components/CollapseList';

export const Project = () => {
  const params = useParams();
  const valores = [
    {
      id: 1,
      title: 'Desenvolver visual TCC',
      prazo: '10/09/2023',
      responsavel: 'Calebe Rodrigues',
    },
    {
      id: 2,
      title: 'Criar backend',
      prazo: '25/11/2023',
      responsavel: 'Gustavo Tavora',
    },
    {
      id: 3,
      title: 'Aprender programar',
      prazo: '09/09/2023',
      responsavel: 'Gabriel Augusto',
    },
    {
      id: 4,
      title: 'Entregar projeto TCC',
      prazo: '03/11/2023',
      responsavel: 'Lucas Lippi',
    },
    {
      id: 5,
      title: 'Criar Power BI',
      prazo: '09/09/2023',
      responsavel: 'Jorge Coutinho',
    },
    {
      id: 6,
      title: 'Ajustar Power BI',
      prazo: '03/10/2023',
      responsavel: 'Jorge Coutinho',
    },
    {
      id: 7,
      title: 'Canhoto',
      prazo: '24/10/2023',
      responsavel: 'Calebe Rodrigues',
    },
    {
      id: 8,
      title: 'Ir pra faculdade',
      prazo: '01/01/2023',
      responsavel: 'Greison',
    },
  ];

  return (
    <div className="container" style={{ marginTop: '70px' }}>
      <h3>Projeto page {params.id}</h3>
      <br />
      <br />
      <GanttChart />
      <div className="row">
        <div className="col-6 p-1">
          <h3>Etapas</h3>
        </div>
        <div className="col-6" style={{ textAlign: 'right' }}>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">
              Criar
            </button>
            <button type="button" className="btn btn-primary">
              Atualizar
            </button>
          </div>
        </div>
      </div>
      <br />

      <CollapseList
        data={{
          id: 1,
          nome: 'Teste etapa',
        }}
      />

      <KanbanActivity />

      <div>
        <div className="collapse" id="collapseWidthExample">
          <div className="card card-body" style={{ width: '300px' }}>
            This is some placeholder content for a horizontal collapse
          </div>
        </div>
      </div>

      <div className="collapse" id="collapseWidthExample">
        <div className="card card-body" style={{ width: '300px' }}>
          This is some placeholder content for a horizontal collapse
        </div>
      </div>

      <div className="collapse" id="collapseWidthExample">
        <div className="card card-body" style={{ width: '300px' }}>
          This is some placeholder content for a horizontal collapse
        </div>
      </div>

      <div className="collapse" id="collapseWidthExample">
        <div className="card card-body" style={{ width: '300px' }}>
          This is some placeholder content for a horizontal collapse
        </div>
      </div>

      <div className="row">
        {valores.map((v) => (
          <div key={v.id} className="col-md-3">
            <CardActivity
              values={{
                id: v.id,
                title: v.title,
                prazo: v.prazo,
                responsavel: v.responsavel,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
