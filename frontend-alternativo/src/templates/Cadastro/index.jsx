import React, { useState } from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado
import { Link } from 'react-router-dom';
import { Api } from '../../services/api';
// import { Tooltip } from '../../components/Tooltip';

export const Cadastro = () => {
  const [values, setValues] = useState({ nome: '', email: '', senha: '' });
  const [registeRequest, setRegisteRequest] = useState(false);

  const register = async () => {
    try {
      const response = await Api.post('/user/register', values);

      console.table(response.data);
      alert('Cadastrado com sucesso!');
    } catch (e) {
      console.log(e.message);
    } finally {
      setRegisteRequest(false);
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
    setRegisteRequest(true);
    register();
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
                    <label className="form-label">Nome</label>
                    <input name="nome" type="text" className="form-control" value={values.nome} onChange={onChange} />
                  </div>
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
                      name="senha"
                      type="password"
                      className="form-control"
                      value={values.senha}
                      onChange={onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>
                    {registeRequest ? (
                      <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      'Cadastrar'
                    )}
                  </button>
                  <div className="mb-3"></div>
                  <span>
                    Já tem conta? <Link to={'/login'}>Vá para a página de login</Link>
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
