import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../services/api';

export const FormEtapa = () => {
  const [etapas, setEtapas] = useState(null);
  const params = useParams();

  const findEtapasByProject = async () => {
    try {
      const resp = await Api.get(`/etapas/${params.id}`);
      setEtapas(resp.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    findEtapasByProject();
  }, []);

  return (
    <div>
      <h1>Etapas do projeto id {params.id}</h1>
      <div className="mt-4">
        {etapas &&
          etapas.map((v) => (
            <div key={v.id} className="mb-2">
              <h5>{v.nome}</h5>
              <p>{v.descricao}</p>
              <p>{v.dataInicio}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
