import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import dashboards from '../../assets/icons/dashboards.png';
import membros from '../../assets/icons/membros.png';

export const NavLateral = () => {
  return (
    <Styles.Container className="w-100">
      <Styles.Item>
        <Styles.Icon src={inicio} /> Inicio
      </Styles.Item>
      <Styles.Item>
        <Styles.Icon src={dashboards} /> Dashboards
      </Styles.Item>
      <Styles.Item>
        <Styles.Icon src={membros} />
        Membros
      </Styles.Item>
      <Styles.Item>Navbar Lateral</Styles.Item>
      <Styles.Item>Navbar Lateral</Styles.Item>
      <Styles.Item>Navbar Lateral</Styles.Item>
    </Styles.Container>
  );
};
