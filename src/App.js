import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaginaPrincipal from './components/pages/PaginaPrincipal';
import RegistroEmpleado from './components/pages/RegistroEmpleado';
import PaginaAsistencia from './components/pages/PaginaAsistencia';
import PaginaEmpleados from './components/pages/PaginaEmpleados';
import PaginaBoletas from './components/pages/PaginaBoletas';
import PaginaVenta from './components/pages/PaginaVenta';
import ErrorPage from './components/pages/PaginaError';

const App = () => (
  <Switch className="ui container">
    <Route path="/" exact component={PaginaPrincipal} />
    <Route path="/empleado" exact component={RegistroEmpleado} />
    <Route path="/empleados" exact component={PaginaEmpleados} />
    <Route path="/boletas" exact component={PaginaBoletas} />
    <Route path="/asistencia" exact component={PaginaAsistencia} />
    <Route path="/venta" exact component={PaginaVenta} />
    <Route exact component={ErrorPage} />
  </Switch>
)

export default App;
