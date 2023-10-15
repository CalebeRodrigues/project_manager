import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import dashboards from '../../assets/icons/dashboards_cor.png';
import membros from '../../assets/icons/membros_cor.png';
import atividades from '../../assets/icons/atividades_cor.png';
import ideia from '../../assets/icons/ideia_cor.png';
import { Link } from 'react-router-dom';

export const NavLateral = () => {
  return (
    <Styles.Container className="w-100">
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
      <Styles.Item>Navbar Lateral</Styles.Item>
    </Styles.Container>
  );
};
