import { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth/useAuth';
import { Api } from '../../services/api';
import { CardProject } from '../../components/CardProject';
import { Link } from 'react-router-dom';
import { useProject } from '../../context/Project/useProject';

export const ListProjects = () => {
  const auth = useAuth();
  const projNav = useProject();
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
    projNav.reset();
    findProjects();
  }, []);

  return (
    <div className="container">
      <h1>Projetos</h1>

      <div className="mt-4 mb-4">
        <Link to={`/projeto/criar`} className="btn btn-primary">
          Novo Projeto
        </Link>
      </div>

      <div className="mt-4 row">
        {projects &&
          projects.map((v) => {
            return (
              <div key={v.proj.id} className="col-lg-6 mt-4 mb-4">
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
