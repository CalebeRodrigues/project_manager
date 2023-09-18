import React, { useState } from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado
import { useAuth } from '../../context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [values, setValues] = useState({ email: '', pass: '' });
  const auth = useAuth();

  const navigate = useNavigate();

  const login = async () => {
    try {
      await auth.authenticate(values.email, values.pass);
      console.log('Loguei');
      return navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = () => {
    login();
  };

  return (
    <div className="container" style={{ marginTop: '120px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card login-card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <div className="mb-3">
                <label className="form-label">Usuário</label>
                <input name="email" type="email" className="form-control" value={values.email} onChange={onChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input name="pass" type="password" className="form-control" value={values.pass} onChange={onChange} />
              </div>
              <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
