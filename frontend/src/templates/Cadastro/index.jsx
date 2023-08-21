import React from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado

export const Cadastro = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card cadastro-card">
            <div className="card-body">
              <h3 className="card-title text-center">Cadastro</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nome
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
