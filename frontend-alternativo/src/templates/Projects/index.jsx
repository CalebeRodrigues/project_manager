import { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth/useAuth';
import { Api } from '../../services/api';
import { CardProject } from '../../components/CardProject';

export const Projects = () => {
  const auth = useAuth();
  const [projects, setProjects] = useState(null);

  async function findProjects() {
    try {
      const request = await Api.get(`/projs/${auth.token}?includes=proj`);

      setProjects(request.data);
    } catch (e) {
      setProjects(null);
    } finally {
      console.log('---------');
    }
  }

  useEffect(() => {
    findProjects();
  }, []);

  return (
    <div className="container">
      <h1>Projetos</h1>

      <div className="mt-4 row">
        {projects &&
          projects.map((v) => {
            return (
              <div key={v.proj.id} className="col m-1">
                <CardProject
                  data={{
                    id: v.proj.id,
                    nome: v.proj.nome,
                    descricao: v.proj.descricao,
                    status: v.proj.status,
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
