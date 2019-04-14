import React from 'react'; 
import FormularioEmpleado from "../forms/FormularioEmpleado";
import { Link } from "react-router-dom";
import firebase from "../API/firebase";

class PaginaEmpleado extends React.Component {
    submit = (data) => {
        var task = firebase.database().ref("empleado/" + data.ci);
        task.set(data);
        alert("se guardo el empleado correctamente!");
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro de nuevo empleado</h1>
                    <FormularioEmpleado submit={this.submit}/>
                    <br />
                    <Link className="ui button" to="/">Cancelar</Link>
                    <br />
                </div>
            </div>
        );
    }
}
export default PaginaEmpleado;