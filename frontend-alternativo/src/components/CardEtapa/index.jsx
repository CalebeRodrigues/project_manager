import { Link } from 'react-router-dom';
import { useProject } from '../../context/Project/useProject';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import P from 'prop-types';

export const CardEtapa = ({ data }) => {
  const [count, setCount] = useState({ andamento: 0, total: 0 });
  const { id, title, descricao, dataInicioReal, dataEntrega, reload } = data;
  const [active, setActive] = useState(false);
  const project = useProject();

  const formatarData = () => {
    // Obtém a data atual
    var dataAtual = new Date();

    // Obtém o dia, mês e ano da data atual
    var dia = adicionarZero(dataAtual.getDate());
    var mes = adicionarZero(dataAtual.getMonth() + 1); // Os meses começam do zero, então adicionamos 1
    var ano = dataAtual.getFullYear();

    // Formata a data no estilo dd/MM/yyyy
    var dataFormatada = `${dia}/${mes}/${ano}`;

    // Retorna a data formatada
    return dataFormatada;
  };

  // Função auxiliar para adicionar zero à esquerda, se necessário
  const adicionarZero = (numero) => {
    return numero < 10 ? `0${numero}` : numero;
  };

  const countEtapaAtividades = async () => {
    try {
      const resp = await Api.get(`/atividade/count/${id}`);
      setActive(false);
      setCount(resp.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const updateEtapa = async (op) => {
    try {
      if (op == 'liberar') {
        await Api.put(`/etapa/update/${id}`, {
          dataInicioReal: formatarData(),
        });
        return;
      }

      await Api.put(`/etapa/update/${id}`, {
        dataEntrega: formatarData(),
      });
    } catch (e) {
      console.log(e.message);
    } finally {
      reload(true);
    }
  };

  useEffect(() => {
    countEtapaAtividades();
  }, []);

  return (
    <div className="card mb-4" style={{ width: '98%' }}>
      <h4 className="card-header">Etapa #{id}</h4>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descricao}</p>
        <Link
          to={`/projeto/${project.idProj}/etapa/${id}`}
          className={`btn btn-primary ${
            project.acesso && project.acesso.includes('LIBERAR_ETAPA') ? '' : active ? '' : 'disabled'
          }`}
          style={{ marginRight: '1%' }}
        >
          Visualizar atividades {`${count.andamento}/${count.total}`}
        </Link>
        {dataInicioReal.length > 0 && dataEntrega.length > 0 && (
          <div className="btn " role="alert">
            Etapa finalizada no dia {dataEntrega}
          </div>
        )}
        {project.acesso &&
          project.acesso.includes('LIBERAR_ETAPA') &&
          !active &&
          !dataInicioReal.length > 0 &&
          !dataEntrega.length > 0 && (
            <button className="btn btn-success" style={{ marginRight: '1%' }} onClick={() => updateEtapa('liberar')}>
              Liberar etapa
            </button>
          )}
        {project.acesso &&
          project.acesso.includes('FINALIZAR_ETAPA') &&
          dataInicioReal.length > 0 &&
          !dataEntrega.length > 0 &&
          count.andamento == count.total && (
            <button className="btn btn-danger" onClick={() => updateEtapa('finalizar')}>
              Finalizar etapa
            </button>
          )}
      </div>
    </div>
  );
};

CardEtapa.propTypes = {
  data: P.shape({
    id: P.number,
    title: P.string,
    descricao: P.string,
    dataInicioReal: P.string,
    dataEntrega: P.string,
    reload: P.func,
  }),
};
