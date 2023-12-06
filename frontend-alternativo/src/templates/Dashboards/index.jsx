import { useParams } from 'react-router-dom';
import { Donut } from '../../components/Donut';
import { useProject } from '../../context/Project/useProject';
import { Api } from '../../services/api';
import { useEffect, useState } from 'react';
import { BarChart } from '../../components/BarChart';
import { PieChart } from '../../components/PieChart';

export const Dashboards = () => {
  const projNav = useProject();
  const params = useParams();

  const [members, setMembers] = useState(null);
  const [etapas, setEtapas] = useState(null);

  const [dataDonut, setDataDonut] = useState(null);
  const [barDonut, setBarDonut] = useState(null);
  const [pieChart, setPieChart] = useState(null);

  const findUserProj = async () => {
    try {
      const resp = await Api.get(`/proj/${params.id}?include=members`);

      setMembers(resp.data);
    } catch (e) {
      setMembers(null);
    }
  };

  const findEtapas = async () => {
    try {
      const resp = await Api.get(`/atividades/proj/${params.id}`);

      setEtapas(resp.data);
    } catch (e) {
      setEtapas(null);
    }
  };

  useEffect(() => {
    projNav.define(params.id);
    findUserProj();
    findEtapas();
  }, []);

  useEffect(() => {
    if (!etapas) return;
    calculoDonutAtividades();
    calcBarAtividades();
    calcAtividadesPendenteByAtividade();
  }, [etapas]);

  const calculoDonutAtividades = () => {
    if (!etapas) return;
    if (!members) return;

    const array = [['Responsável', 'Atividades']];

    for (const membro of members) {
      let qtd = 0;
      for (const et of etapas) {
        for (const at of et.atividades) {
          if (membro.idUser == at.idUser) qtd++;
        }
      }
      let arrayTemp = [membro.user.nome, qtd];

      array.push(arrayTemp);
    }
    setDataDonut(array);
  };

  const calcBarAtividades = () => {
    if (!etapas) return;
    if (!members) return;

    const cabecalho = ['Etapa'];
    const aux = ['Projeto'];

    for (const et of etapas) {
      cabecalho.push(et.nome);
      aux.push(et.atividades.length);
    }

    const array = [[...cabecalho], [...aux]];

    setBarDonut(array);
  };

  const calcAtividadesPendenteByAtividade = () => {
    const array = [];

    for (const et of etapas) {
      const nome = et.nome;
      let porfazer = 0;
      let fazendo = 0;
      let concluido = 0;

      for (const at of et.atividades) {
        if (at.kanban == 'does') concluido++;
        if (at.kanban == 'do') porfazer++;
        if (at.kanban == 'doing') fazendo++;
        if (at.kanban == 'doing2') fazendo++;
      }
      array.push({
        nome,
        dados: [
          ['Por fazer', porfazer],
          ['Fazendo', fazendo],
          ['Concluido', concluido],
        ],
      });
    }

    setPieChart(array);
  };

  return (
    <div className="container mt-3">
      <div className="mb-2">
        <h1>Dashboards</h1>
      </div>
      <div
        className="row m-1"
        style={{
          border: '1px solid #f5f5f5',
          maxHeight: '82vh',
          height: '82vh',
          overflowY: 'auto',
          borderRadius: '10px',
        }}
      >
        {dataDonut && <Donut data={dataDonut} />}
        <hr style={{ color: '#f2f2f2' }} />

        {barDonut && <BarChart data={barDonut} />}

        {pieChart &&
          pieChart.map((pie) => (
            <>
              <hr style={{ color: '#f2f2f2' }} />
              <PieChart key={pie.nome} data={pie.dados} title={pie.nome} />
            </>
          ))}
        <div></div>
      </div>
    </div>
  );
};
