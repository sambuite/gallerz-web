import { Router, Redirect, Route, RouteProps } from 'react-router-dom';

import Home from './pages/Home';
import RegisterUsers from './pages/RegisterUsers';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import history from './history';
import ShoppingCart from './pages/ShoppingCart';

type CustomRouteProps = RouteProps & {
  isPrivate?: boolean;
};

const CustomRoute = ({ isPrivate, ...rest }: CustomRouteProps) => {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

const Routes = () => {
  return (
    <Router history={history}>
      <CustomRoute component={Home} path="/" exact />
      <CustomRoute component={Login} path="/login" />
      <CustomRoute component={RegisterUsers} path="/register" />
      <CustomRoute component={ShoppingCart} path="/shopping-cart" />
    </Router>
  );
};

export default Routes;
