import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaginaPrincipal from './components/paginas/PaginaPrincipal';
import RegistroEmpleado from './components/paginas/RegistroEmpleado';
import PaginaAsistencia from './components/paginas/PaginaAsistencia';
import PaginaEmpleados from './components/paginas/PaginaEmpleados';
import PaginaBoletas from './components/paginas/PaginaBoletas';
import PaginaVenta from './components/paginas/PaginaVenta';
import ErrorPage from './components/paginas/PaginaError';

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
