import React from 'react'; 
import FormularioEmpleado from "../formularios/FormularioEmpleado";
import { Button } from "semantic-ui-react";
import axios from "axios";

class RegistroEmpleado extends React.Component {
    constructor(props) {
        super(props);
    }
    crearNuevoEmpleado = (empleado) => {
        axios.post('http://localhost:7000/empleado/nuevo', empleado)
             .then(res => console.log("el front end recibio la respuesta", res))
             .catch(error => console.log(error))
        this.props.history.push("/");
    }
    volverAPaginaEmpleados() {
        this.props.history.goBack();
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro de nuevo empleado</h1>
                    <FormularioEmpleado submit={this.crearNuevoEmpleado}/>
                    <br />
                    <Button onClick={this.volverAPaginaEmpleados.bind(this)}>Cancelar</Button>
                    <br />
                </div>
            </div>
        );
    }
}
export default RegistroEmpleado;