import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../templates/App';
import { Navbar } from '../components/Navbar';
import { NavLateral } from '../components/NavLateral';
import { Login } from '../templates/Login';
import { RouteOptional } from './Optional';
import { RoutePrivate } from './Private';
import { useAuth } from '../context/Auth/useAuth';
import { useEffect } from 'react';
import { ListProjects } from '../templates/ListProjects';
import { Project } from '../templates/Project';
import { FormProject } from '../templates/FormProject';
import { Cadastro } from '../templates/Cadastro';
import { FormEtapa } from '../templates/FormEtapa';
import { ListMembers } from '../templates/ListMembers';
import { Etapa } from '../templates/Etapa';
import { Manager } from '../templates/Manager';
import { Dashboards } from '../templates/Dashboards';

export const Router = () => {
  const auth = useAuth();

  useEffect(() => console.log(auth));

  return (
    <Main>
      <BrowserRouter>
        <Navbar />
        <Container className="row">
          <div className={`col-lg-2 ${!auth.token ? 'd-none' : ''}`} style={{ padding: 0, paddingLeft: '1.2%' }}>
            <NavLateral />
          </div>
          <div className={`${!auth.token ? '' : 'col-lg-10'}`}>
            <Routes>
              <Route path="/login" element={<RouteOptional />}>
                <Route path="/login" element={<Login />} />
              </Route>

              <Route path="/cadastro" element={<RouteOptional />}>
                <Route path="/cadastro" element={<Cadastro />} />
              </Route>

              <Route path="/" element={<RoutePrivate />}>
                <Route path="/" element={<ListProjects />} />
                <Route path="/dashboards/:id" element={<Dashboards />} />
                <Route path="/members" element={<App />} />
                <Route path="/atividades" element={<App />} />
                <Route path="/projetos" element={<ListProjects />} />
                <Route path="/projeto/criar" element={<FormProject />} />
                <Route path="/projeto/:id" element={<Project />} />
                <Route path="/projeto/:id/etapa/:idEtapa" element={<Etapa />} />
                <Route path="/projeto/:id/etapa/criar" element={<FormEtapa />} />
                <Route path="/projeto/config" element={<Manager />} />
                <Route path="/members/:id" element={<ListMembers />} />
              </Route>
            </Routes>
          </div>
        </Container>
      </BrowserRouter>
    </Main>
  );
};

const Main = styled.div`
  /* background-color: #112231; */
`;

const Container = styled.div`
  @media screen and (max-width: 991px) {
    margin-top: 7%;
  }

  @media screen and (max-width: 769px) {
    margin-top: 12%;
  }

  @media screen and (max-width: 500px) {
    margin-top: 14%;
  }

  @media screen and (max-width: 382px) {
    margin-top: 20%;
  }
`;
