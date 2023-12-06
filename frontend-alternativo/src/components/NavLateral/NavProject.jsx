import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import dashboards from '../../assets/icons/dashboards_cor.png';
import membros from '../../assets/icons/membros_cor.png';
import cadeado from '../../assets/icons/cadeado.png';
import fluxo from '../../assets/icons/fluxo.png';
import sair from '../../assets/icons/sair.png';

import { Link } from 'react-router-dom';
import { useProject } from '../../context/Project/useProject';

export const NavProject = () => {
  const projNav = useProject();

  return (
    <>
      <Styles.Item>Projeto</Styles.Item>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={inicio} /> Inicio
        </Styles.Item>
      </Link>
      <Link to={`/dashboards/${projNav.idProj}`} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={dashboards} /> Dashboards
        </Styles.Item>
      </Link>
      <Link to={`/members/${projNav.idProj}`} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={membros} />
          Membros
        </Styles.Item>
      </Link>
      <Link to={`/projeto/${projNav.idProj}`} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={fluxo} />
          Etapas
        </Styles.Item>
      </Link>
      <Link to={'/projeto/config'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={cadeado} />
          Gerenciar
        </Styles.Item>
      </Link>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Styles.Item>
          <Styles.Icon src={sair} />
          Voltar
        </Styles.Item>
      </Link>
    </>
  );
};
