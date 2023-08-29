import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../templates/App';
import { Login } from '../templates/Login';
import { Cadastro } from '../templates/Cadastro';
import { Navbar } from '../components/Navbar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};
