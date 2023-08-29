// import logout from '../../img/icons/log-out.svg';
import { Link, redirect } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';

export const Navbar = () => {
  const auth = useAuth();

  const handleClickLogout = () => {
    auth.logout();

    alert('Entrei');

    return redirect('/login');
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Gerenciador de Projetos
        </Link>
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
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projetos">
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/atividades">
                  Minhas Atividades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClickLogout}>
                  {/* <img src={logout} alt="" className="img-fluid pl-4" /> */}
                  Sair
                </Link>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar um projeto" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
