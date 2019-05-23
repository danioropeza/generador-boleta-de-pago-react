import React from 'react';
import { Button } from "semantic-ui-react";

class PaginaEmpleados extends React.Component {
    constructor(props) {
        super(props);

    }
    submit = (data) => {
        console.log(data)
        alert("se guardo la venta correctamente!");
    };
    redireccionarAFormulario(url) {
        this.props.history.push('/' + url);
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "empleado")} color="red" fluid>Registrar Empleado</Button>
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "asistencia")} color="red" fluid>Registrar Asistencia</Button>
                    <br />
                    <Button onClick={this.redireccionarAFormulario.bind(this, "venta")} color="red" fluid>Registrar Venta</Button>
                </div>
            </div>
        );
    }
}
export default PaginaEmpleados;