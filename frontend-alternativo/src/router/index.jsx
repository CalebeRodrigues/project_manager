import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../templates/App';
import { AuthProvider } from '../context/Auth/AuthProvider';
import { Navbar } from '../components/Navbar';
import { NavLateral } from '../components/NavLateral';
// import { RoutePrivate } from './Private';
// import { RouteOptional } from './Optional';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <div className="row" style={{ marginTop: '4.5%' }}>
          <div className="col-lg-2" style={{ padding: 0, paddingLeft: '1.2%' }}>
            <NavLateral />
          </div>
          <div className="col-lg-10">
            <Routes>
              <Route path="/" element={<App />} />

              {/* <Route path="/login" element={<RouteOptional />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/" element={<RoutePrivate />}>
            <Route path="/" element={<App />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/proj/:id" element={<Project />} />
          </Route> */}
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};
