import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Dashboard from '.components/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Dashboard/> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
