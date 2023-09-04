import React, { useState } from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado
import { Api } from '../../services/api';

export const Login = () => {
  const [values, setValues] = useState({ email: '', pass: '' });

  const login = async () => {
    const user = await Api.get('/user/login', {
      email: values.email,
      senha: values.pass,
    }).catch((e) => alert(e.message));

    console.log(user);
    console.table(user);
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = () => {
    alert(`E-mail: ${values.email}\nSenha: ${values.pass}`);
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
