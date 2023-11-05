import { useContext } from 'react';
import { ProjectContext } from './Context';

export const useProject = () => {
  const context = useContext(ProjectContext);
  return context;
};
