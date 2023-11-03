import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import dashboards from '../../assets/icons/dashboards_cor.png';
import membros from '../../assets/icons/membros_cor.png';
import atividades from '../../assets/icons/atividades_cor.png';
import ideia from '../../assets/icons/ideia_cor.png';
import sair from '../../assets/icons/sair.png';

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';

export const NavLateral = () => {
  const auth = useAuth();

  return (
    <Styles.Container className="w-100">
      <Styles.Item>Proj Manager</Styles.Item>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={inicio} /> Inicio
        </Styles.Item>
      </Link>
      <Link to={'/dashboards'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={dashboards} /> Dashboards
        </Styles.Item>
      </Link>
      <Link to={'/members'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={membros} />
          Membros
        </Styles.Item>
      </Link>
      <Link to={'/atividades'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={atividades} />
          Atividades
        </Styles.Item>
      </Link>
      <Link to={'/projetos'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={ideia} />
          Projetos
        </Styles.Item>
      </Link>
      <Link to={'/projeto/criar'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={ideia} />
          Criar
        </Styles.Item>
      </Link>
      <Link to={'/'} style={{ textDecoration: 'none' }} onClick={() => auth.logout()}>
        <Styles.Item>
          <Styles.Icon src={sair} />
          Sair
        </Styles.Item>
      </Link>
    </Styles.Container>
  );
};
