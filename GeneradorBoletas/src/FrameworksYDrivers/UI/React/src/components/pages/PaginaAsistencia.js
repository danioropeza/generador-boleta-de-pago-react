import React from 'react'; 
import FormularioAsistencia from "../forms/FormularioAsistencia";
import { Button, Form } from "semantic-ui-react";

class PaginaAsistencia extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (data) => {
        console.log(data)
        alert("se guardo la asistencia correctamente!");
    };
    volverAPaginaEmpleados() {
        this.props.history.goBack();
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro de nueva asistencia</h1>
                    <FormularioAsistencia submit={this.submit}/>
                    <br />
                    <Button onClick={this.volverAPaginaEmpleados.bind(this)}>Cancelar</Button>
                    <br />
                </div>
            </div>
        );
    }
}
export default PaginaAsistencia;