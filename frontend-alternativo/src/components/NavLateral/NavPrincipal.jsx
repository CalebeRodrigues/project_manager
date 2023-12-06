import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import ideia from '../../assets/icons/ideia_cor.png';
import sair from '../../assets/icons/sair.png';

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';

export const NavPrincipal = () => {
  const auth = useAuth();

  return (
    <>
      <Styles.Item>Proj Manager</Styles.Item>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={inicio} /> Inicio
        </Styles.Item>
      </Link>
      <Link to={'/projetos'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={ideia} />
          Projetos
        </Styles.Item>
      </Link>
      <Link to={'/'} style={{ textDecoration: 'none' }} onClick={() => auth.logout()}>
        <Styles.Item>
          <Styles.Icon src={sair} />
          Sair
        </Styles.Item>
      </Link>
    </>
  );
};
