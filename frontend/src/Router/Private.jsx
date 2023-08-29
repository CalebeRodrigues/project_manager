import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../context/Auth/Context';

// eslint-disable-next-line
export const RoutePrivate = ( { component: Component, ...rest } ) => {
  const { token } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        //eslint-disable-next-line
          token ? <Component {...rest} />
          : <Redirect to="/login" />
      }
    />
  );
};
