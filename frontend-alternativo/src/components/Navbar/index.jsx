import { Link } from 'react-router-dom';
import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import dashboards from '../../assets/icons/dashboards_cor.png';
import membros from '../../assets/icons/membros_cor.png';
import atividades from '../../assets/icons/atividades_cor.png';
import ideia from '../../assets/icons/ideia_cor.png';

export const Navbar = () => {
  return (
    <Styles.Container className="navbar fixed-top">
      <div className="container-fluid">
        <Styles.Title className="navbar-brand" href="#">
          Gerenciador de projetos
        </Styles.Title>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Styles.ContainerCanvas
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Styles.TitleOffCanvas className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </Styles.TitleOffCanvas>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <Styles.Item>
                    <Styles.Icon src={inicio} /> Inicio
                  </Styles.Item>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'/dashboards'} style={{ textDecoration: 'none' }}>
                  <Styles.Item>
                    <Styles.Icon src={dashboards} /> Dashboards
                  </Styles.Item>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'/members'} style={{ textDecoration: 'none' }}>
                  <Styles.Item>
                    <Styles.Icon src={membros} />
                    Membros
                  </Styles.Item>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'/atividades'} style={{ textDecoration: 'none' }}>
                  <Styles.Item>
                    <Styles.Icon src={atividades} />
                    Atividades
                  </Styles.Item>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'/projetos'} style={{ textDecoration: 'none' }}>
                  <Styles.Item>
                    <Styles.Icon src={ideia} />
                    Projetos
                  </Styles.Item>
                </Link>
              </li>
            </ul>
          </div>
        </Styles.ContainerCanvas>
      </div>
    </Styles.Container>
  );
};
