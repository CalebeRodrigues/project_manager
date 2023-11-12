import { useNavigate, useParams } from 'react-router-dom';
import { CardActivity } from '../../components/CardActivity';
import * as Styles from './style';
import { useEffect } from 'react';
import { useProject } from '../../context/Project/useProject';
import { Api } from '../../services/api';
import { useAuth } from '../../context/Auth/useAuth';

export const Etapa = () => {
  const auth = useAuth();
  const params = useParams();
  const projNav = useProject();
  const navigate = useNavigate();

  const isMember = async () => {
    try {
      await Api.get(`/proj/member/${auth.token}?idProj=${params.id}`);
    } catch {
      navigate('/projetos');
    }
  };

  useEffect(() => {
    isMember();
    projNav.define(params.id);
  }, []);

  return (
    <div className="mt-4 container">
      <h1>Etapa</h1>
      <Styles.KanbanContainer>
        <Styles.KanBanItem>
          <h3 className="mb-3" style={{ textAlign: 'center' }}>
            Por fazer
          </h3>
          <CardActivity />
        </Styles.KanBanItem>
        <Styles.KanBanItem>
          <h3 className="mb-3" style={{ textAlign: 'center' }}>
            Fazendo
          </h3>
          <CardActivity />
          <CardActivity />
          <CardActivity />
        </Styles.KanBanItem>
        <Styles.KanBanItem>
          <h3 className="mb-3" style={{ textAlign: 'center' }}>
            Finalizado
          </h3>
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
        </Styles.KanBanItem>
      </Styles.KanbanContainer>
    </div>
  );
};
