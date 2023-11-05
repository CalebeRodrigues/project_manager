import { useState } from 'react';
import { ProjectContext } from './Context';

// eslint-disable-next-line
export const ProjectProvider = ({ children }) => {
  const [proj, setProj] = useState(null);

  const define = async (id) => {
    setProj({
      idProj: id,
      acesso: 1,
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
