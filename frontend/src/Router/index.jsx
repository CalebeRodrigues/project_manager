import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../templates/App';
import { Login } from '../templates/Login';
import { Cadastro } from '../templates/Cadastro';
import { Navbar } from '../components/Navbar';
import { Project } from '../templates/Project';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/proj/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};
