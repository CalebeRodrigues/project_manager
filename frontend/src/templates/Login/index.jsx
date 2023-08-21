import React from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado

export const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card login-card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Usuário
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
