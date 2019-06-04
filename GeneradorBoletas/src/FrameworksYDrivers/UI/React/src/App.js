import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PaginaPrincipal from './components/paginas/PaginaPrincipal';
import RegistroEmpleado from './components/paginas/RegistroEmpleado';
import PaginaEmpleados from './components/paginas/PaginaEmpleados';
import PaginaBoletas from './components/paginas/PaginaBoletas';
import PaginaListaBoletas from './components/paginas/PaginaListaBoletas';
import ErrorPage from './components/paginas/PaginaError';

const App = () => (
  <Switch className="ui container">
    <Route path="/" exact component={PaginaPrincipal} />
    <Route path="/empleado" exact component={RegistroEmpleado} />
    <Route path="/empleados" exact component={PaginaEmpleados} />
    <Route path="/boletas" exact component={PaginaBoletas} />
    <Route path="/verboletas" exact component={PaginaListaBoletas} />
    <Route exact component={ErrorPage} />
  </Switch>
)

export default App;
