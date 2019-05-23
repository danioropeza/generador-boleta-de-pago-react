import React from 'react'; 
import FormularioEmpleado from "../forms/FormularioEmpleado";
import { Button } from "semantic-ui-react";

class RegistroEmpleado extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (data) => {
        console.log(data)
        alert("se guardo el empleado correctamente!");
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