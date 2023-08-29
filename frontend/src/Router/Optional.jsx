import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';

// eslint-disable-next-line
export const OptionalRoute = ( { component: Component, ...rest } ) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        //eslint-disable-next-line
          !auth.token ? <Component {...rest} />
          : <Redirect to="/home" />
      }
    />
  );
};
