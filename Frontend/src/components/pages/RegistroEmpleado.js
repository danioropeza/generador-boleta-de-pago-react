import React from 'react'; 
import FormularioEmpleado from "../forms/FormularioEmpleado";
import { Button } from "semantic-ui-react";
import axios from "axios";

class RegistroEmpleado extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (data) => {
        axios.post('http://localhost:7000/empleado/nuevo', data)
             .then(res => alert("Se creo un nuevo cliente"))
             .catch(error => console.log(error))
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
                    <FormularioEmpleado submit={this.submit}/>
                    <br />
                    <Button onClick={this.volverAPaginaEmpleados.bind(this)}>Cancelar</Button>
                    <br />
                </div>
            </div>
        );
    }
}
export default RegistroEmpleado;