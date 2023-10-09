import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../context/Auth/Context';

// eslint-disable-next-line
export const RoutePrivate = ( { component: Component, ...rest } ) => {
  const { token } = useContext(AuthContext);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
