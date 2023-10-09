import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from '../templates/App';
import { AuthProvider } from '../context/Auth/AuthProvider';
// import { RoutePrivate } from './Private';
// import { RouteOptional } from './Optional';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Navbar /> */}
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
      </AuthProvider>
    </BrowserRouter>
  );
};
