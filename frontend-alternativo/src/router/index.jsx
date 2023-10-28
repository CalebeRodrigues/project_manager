import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../templates/App';
import { Navbar } from '../components/Navbar';
import { NavLateral } from '../components/NavLateral';
import { Login } from '../templates/Login';
import { RouteOptional } from './Optional';
import { RoutePrivate } from './Private';
import { useAuth } from '../context/Auth/useAuth';
import { useEffect } from 'react';
import { Projects } from '../templates/Projects';
import styled from 'styled-components';

export const Router = () => {
  const auth = useAuth();

  useEffect(() => console.log(auth));

  return (
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

            <Route path="/" element={<RoutePrivate />}>
              <Route path="/" element={<App />} />
              <Route path="/dashboards" element={<App />} />
              <Route path="/members" element={<App />} />
              <Route path="/atividades" element={<App />} />
              <Route path="/projetos" element={<Projects />} />
              {/* <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/proj/:id" element={<Project />} /> */}
            </Route>
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
};

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
