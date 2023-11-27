import { useState } from 'react';
import { ProjectContext } from './Context';
import { Api } from '../../services/api';
import { useAuth } from '../Auth/useAuth';

// eslint-disable-next-line
export const ProjectProvider = ({ children }) => {
  const [proj, setProj] = useState(null);
  const auth = useAuth();

  const findAcesses = async (id) => {
    try {
      const resp = await Api.get(`/access/user/?idProj=${id}&idUser=${auth.token}`);

      return resp.data;
    } catch (e) {
      try {
        const resp = await Api.get(`/access/user/?idProj=${id}&idUser=${auth.token}`);

        return resp.data;
      } catch (e) {
        return [];
      }
    }
  };

  const define = async (id) => {
    const acesso = await findAcesses(id);
    setProj({
      idProj: id,
      acesso,
    });
  };

  const reset = async () => {
    setProj(null);
  };

  return (
    <ProjectContext.Provider
      value={{
        ...proj,
        define,
        reset,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
