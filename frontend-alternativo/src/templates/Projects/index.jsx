import { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth/useAuth';
import { Api } from '../../services/api';

export const Projects = () => {
  const auth = useAuth();
  const [projects, setProjects] = useState(null);

  async function findProjects() {
    try {
      const request = await Api.get(`/members?user=${auth.token}`);

      setProjects(request.data);
    } catch (e) {
      setProjects(null);
    } finally {
      console.log(projects);
    }
  }

  useEffect(() => {
    findProjects();
  }, []);

  return (
    <div className="container">
      <h1>Meus projetos</h1>
    </div>
  );
};
