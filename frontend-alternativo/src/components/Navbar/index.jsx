import { Link } from 'react-router-dom';
import * as Styles from './styles';

import inicio from '../../assets/icons/inicio.png';
import dashboards from '../../assets/icons/dashboards_cor.png';
import membros from '../../assets/icons/membros_cor.png';
import fluxo from '../../assets/icons/fluxo.png';
import cadeado from '../../assets/icons/cadeado.png';
import sair from '../../assets/icons/sair.png';
import { useProject } from '../../context/Project/useProject';
import { useAuth } from '../../context/Auth/useAuth';

export const Navbar = () => {
  const auth = useAuth();
  const projNav = useProject();

  return (
    <Styles.Container className="navbar fixed-top">
      <div className="container-fluid">
        <Styles.Title className="navbar-brand" href="/">
          Gerenciador de projetos
        </Styles.Title>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{ backgroundColor: '#224461' }}
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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ backgroundColor: '#224461' }}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas">
              <li className="nav-item">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <Styles.Item>
                    <Styles.Icon src={inicio} /> Inicio
                  </Styles.Item>
                </Link>
              </li>

              {projNav.idProj && (
                <li className="nav-item">
                  <Link to={`/dashboards/${projNav.idProj}`} style={{ textDecoration: 'none' }}>
                    <Styles.Item>
                      <Styles.Icon src={dashboards} /> Dashboards
                    </Styles.Item>
                  </Link>
                </li>
              )}

              {projNav.idProj && (
                <li className="nav-item">
                  <Link to={`/members/${projNav.idProj}`} style={{ textDecoration: 'none' }}>
                    <Styles.Item>
                      <Styles.Icon src={membros} />
                      Membros
                    </Styles.Item>
                  </Link>
                </li>
              )}

              {projNav.idProj && (
                <li className="nav-item">
                  <Link to={`/projeto/${projNav.idProj}`} style={{ textDecoration: 'none' }}>
                    <Styles.Item>
                      <Styles.Icon src={fluxo} />
                      Etapas
                    </Styles.Item>
                  </Link>
                </li>
              )}

              {projNav.idProj && (
                <li className="nav-item">
                  <Link to={'/projeto/config'} style={{ textDecoration: 'none' }}>
                    <Styles.Item>
                      <Styles.Icon src={cadeado} />
                      Gerenciar
                    </Styles.Item>
                  </Link>
                </li>
              )}

              <li className="nav-item">
                {projNav.idProj ? (
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Styles.Item>
                      <Styles.Icon src={sair} />
                      Voltar
                    </Styles.Item>
                  </Link>
                ) : (
                  <Link to={'/'} style={{ textDecoration: 'none' }} onClick={() => auth.logout()}>
                    <Styles.Item>
                      <Styles.Icon src={sair} />
                      Sair
                    </Styles.Item>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </Styles.ContainerCanvas>
      </div>
    </Styles.Container>
  );
};
