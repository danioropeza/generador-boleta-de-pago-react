import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaginaPrincipal from './components/pages/PaginaPrincipal';
import PaginaEmpleado from './components/pages/PaginaEmpleado';
import ErrorPage from './components/pages/PaginaError';

const App = () => (
  <Switch className="ui container">
    <Route path="/" exact component={PaginaPrincipal} />
    <Route path="/empleado" exact component={PaginaEmpleado} />
    <Route exact component={ErrorPage} />
  </Switch>
)

export default App;
