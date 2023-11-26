import P from 'prop-types';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';

export const AccordionPerfil = ({ data }) => {
  const { id, nome, acessosPerfil } = data;

  const [access, setAccess] = useState(null);

  const findCodeAccess = async () => {
    try {
      const resp = await Api.get(`/access/allAccess`);

      setAccess(resp.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    findCodeAccess();
  }, []);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapsePerfil${id}`}
          aria-expanded="false"
          aria-controls={`collapsePerfil${id}`}
        >
          {nome}
        </button>
      </h2>
      <div id={`collapsePerfil${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {access &&
            access.map((value) => (
              <div key={value.code} className="form-check form-switch">
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                  {value.descricao}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  name={`${value.code}`}
                  checked={acessosPerfil.includes(value.code)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

AccordionPerfil.propTypes = {
  data: P.shape({
    id: P.number,
    nome: P.string,
    acessosPerfil: P.array,
  }),
};
