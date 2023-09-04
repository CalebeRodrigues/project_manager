import React, { useState } from 'react';

import './styles.css'; // Importando um arquivo CSS personalizado

export const Cadastro = () => {
  const [errorPassConfirm, setErrorPassConfirm] = useState('');
  const [values, setValues] = useState({
    nome: '',
    email: '',
    pass: '',
    confirmPass: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const clickBtn = (e) => {
    e.preventDefault();

    if (values.pass == values.confirmPass) {
      setErrorPassConfirm('');
      alert(`
        Dados válidos:
          ${values.nome}
          ${values.email}
          ${values.pass}
      `);
    } else {
      alert('Senhas não conferem!');
      setErrorPassConfirm('cadastro-input-error');
    }
  };

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
                  <input type="text" className="form-control" name="nome" value={values.nome} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" name="email" value={values.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input type="password" className="form-control" name="pass" value={values.pass} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Confirmar senha
                  </label>
                  <input
                    type="password"
                    className={'form-control ' + errorPassConfirm}
                    name="confirmPass"
                    value={values.confirmPass}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={clickBtn}>
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
