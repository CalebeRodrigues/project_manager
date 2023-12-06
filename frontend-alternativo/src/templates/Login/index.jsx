import React, { useState } from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado
import { useAuth } from '../../context/Auth/useAuth';
import { Link, useNavigate } from 'react-router-dom';
// import { Tooltip } from '../../components/Tooltip';

export const Login = () => {
  const [values, setValues] = useState({ email: '', pass: '' });
  const auth = useAuth();
  const [errorLogin, setErrorLogin] = useState(false);
  const [loginRequest, setLoginRequest] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    await setTimeout(() => {}, 3000);
    try {
      await auth.authenticate(values.email, values.pass);
      return navigate('/');
    } catch (e) {
      // setLoginStatus(true);
      setErrorLogin(true);
    } finally {
      setLoginRequest(false);
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoginRequest(true);
    login();
  };

  return (
    <>
      <form>
        <div className="container" style={{ marginTop: '80px' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card login-card">
                <div className="card-body">
                  <h3 className="card-title text-center">Login</h3>
                  <div className="mb-3">
                    <label className="form-label">Usuário</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      value={values.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input
                      name="pass"
                      type="password"
                      className={`form-control ${errorLogin ? 'is-invalid' : ''}`}
                      value={values.pass}
                      onChange={onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>
                    {loginRequest ? (
                      <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      'Entrar'
                    )}
                  </button>
                  <div className="mb-3"></div>
                  <span>
                    Ainda não tem conta? <Link to={'/cadastro'}>Realize seu cadastro aqui</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <Tooltip
        data={{
          title: 'Erro ao acessar',
          description: 'Usuário ou senha inválidos. Favor tentar novamente',
          active: isNotLogin,
          setActive: setLoginStatus,
        }}
      /> */}
    </>
  );
};
